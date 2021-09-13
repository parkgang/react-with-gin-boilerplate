package handlers

import (
	"errors"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/parkgang/modern-board/libs"
	"github.com/parkgang/modern-board/models"
	"github.com/parkgang/modern-board/mysql"
	"gorm.io/gorm"
)

// @Summary 사용자 생성
// @Description 사용자를 생성합니다.
// @Tags User
// @Accept json
// @Produce json
// @Param data body models.User true "사용자 메타데이터"
// @Success 201 {object} models.User
// @Header 201 {string} Location "/users/1"
// @Failure 400 {object} models.ErrResponse
// @Failure 500 {object} models.ErrResponse
// @Router /users [post]
func PostUser(c *gin.Context) {
	user := models.User{}

	if err := c.BindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})
		return
	}

	// 쿼리 실행 이후 실행 결과 (정확히 말하면 생성 결과) 가 user 변수로 다시 들어가게 됩니다. 때문에 db에서 자동으로 생성되는 id 값을 user 변수에서 조회할 수 있습니디.
	if err := mysql.Client.Create(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})
		return
	}

	c.Header("Location", fmt.Sprintf("/users/%d", user.Id))
	c.JSON(http.StatusCreated, user)
}

// @Summary 전체 사용자 조회
// @Description 전체 사용자를 반환합니다.
// @Tags User
// @Accept json
// @Produce json
// @Success 200 {object} []models.User
// @Failure 404
// @Failure 500 {object} models.ErrResponse
// @Router /users [get]
func GetAllUser(c *gin.Context) {
	users := []models.User{}

	if err := mysql.Client.Find(&users).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})
		return
	}
	if len(users) == 0 {
		c.Status(http.StatusNotFound)
		return
	}

	c.JSON(http.StatusOK, users)
}

// @Summary 사용자 조회
// @Description 사용자 정보를 반환합니다.
// @Tags User
// @Accept json
// @Produce json
// @Param id path int true "사용자 id"
// @Success 200 {object} models.User
// @Failure 400 {object} models.ErrResponse
// @Failure 404
// @Failure 500 {object} models.ErrResponse
// @Router /users/{id} [get]
func GetUser(c *gin.Context) {
	paramUserId := c.Param("id")

	userId, err := libs.ConvertStringToUint(paramUserId)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})
		return
	}

	users := models.User{
		Id: userId,
	}

	if err := mysql.Client.First(&users).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			c.Status(http.StatusNotFound)
			return
		}

		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, users)
}

// @Summary 사용자 수정
// @Description 사용자 정보를 수정합니다.
// @Tags User
// @Accept json
// @Produce json
// @Param id path int true "사용자 id"
// @Param data body models.User true "사용자 메타데이터"
// @Success 201 {object} models.User
// @Header 201 {string} Location "/users/1"
// @Failure 400 {object} models.ErrResponse
// @Failure 404
// @Failure 500 {object} models.ErrResponse
// @Router /users/{id} [put]
func PutUser(c *gin.Context) {
	user := models.User{}

	paramUserId := c.Param("id")

	userId, err := libs.ConvertStringToUint(paramUserId)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})
		return
	}

	if err := c.BindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})
		return
	}

	if err := mysql.Client.First(&models.User{}, userId).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			c.Status(http.StatusNotFound)
			return
		}

		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})
		return
	}

	user.Id = userId
	if err := mysql.Client.Save(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})
		return
	}

	c.Header("Location", fmt.Sprintf("/users/%d", user.Id))
	c.JSON(http.StatusCreated, user)
}

// @Summary 전체 사용자 삭제
// @Description 전체 사용자 정보를 삭제합니다. 모든데이터가 날라가므로 주의해서 사용해주세요😨
// @Tags User
// @Accept json
// @Produce json
// @Success 204
// @Failure 500 {object} models.ErrResponse
// @Router /users [delete]
func DeleteAllUser(c *gin.Context) {
	if err := mysql.Client.Where("1 = 1").Delete(&models.User{}).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})
		return
	}

	c.Status(http.StatusNoContent)
}

// @Summary 사용자 삭제
// @Description 사용자를 삭제합니다.
// @Tags User
// @Accept json
// @Produce json
// @Param id path int true "사용자 id"
// @Success 204
// @Failure 400 {object} models.ErrResponse
// @Failure 404
// @Failure 500 {object} models.ErrResponse
// @Router /users/{id} [delete]
func DeleteUser(c *gin.Context) {
	paramUserId := c.Param("id")

	userId, err := libs.ConvertStringToUint(paramUserId)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})
		return
	}

	if err := mysql.Client.First(&models.User{}, userId).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			c.Status(http.StatusNotFound)
			return
		}

		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})
		return
	}

	if err := mysql.Client.Delete(&models.User{}, userId).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": err.Error(),
		})
		return
	}

	c.Status(http.StatusNoContent)
}
