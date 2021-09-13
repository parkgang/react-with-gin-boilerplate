package models

type User struct {
	Id   uint   `gorm:"primary_key;auto_increment" json:"id" swaggerignore:"true"`
	Name string `json:"name" binding:"required" example:"kyungeun"`
	Arg  uint8  `json:"arg" binding:"required" example:"99"`
}
