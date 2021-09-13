import { Children } from "react";
import { Flex, Card, CardBody, Skeleton } from "@fluentui/react-northstar";

export default function LoadingCard() {
  return (
    <>
      {Children.toArray(
        Array(7)
          .fill(null)
          .map(() => (
            <Card
              fluid
              aria-roledescription="card with avatar, image and action buttons"
              style={{ padding: "0.5em" }}
            >
              <CardBody style={{ marginBottom: "0" }}>
                <Skeleton animation="wave">
                  <Flex gap="gap.small">
                    <Skeleton.Line width="2%" />
                    <Skeleton.Line width="50%" />
                  </Flex>
                  <Flex gap="gap.small" vAlign="center" space="between">
                    <Skeleton.Line width="10%" />
                    <Flex gap="gap.small">
                      <Skeleton.Button iconOnly />
                      <Skeleton.Button iconOnly />
                    </Flex>
                  </Flex>
                </Skeleton>
              </CardBody>
            </Card>
          ))
      )}
    </>
  );
}
