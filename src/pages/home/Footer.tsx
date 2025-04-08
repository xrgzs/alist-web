import { Anchor, HStack, VStack } from "@hope-ui/solid"
import { Link } from "@solidjs/router"
import { AnchorWithBase } from "~/components"
import { useT } from "~/hooks"
import { me } from "~/store"
import { UserMethods } from "~/types"

export const Footer = () => {
  const t = useT()
  return (
    <VStack
      class="footer"
      // w="$full"
      p="$4"
      borderRadius="$lg"
      bgColor="$neutral4"
      css={{ backdropFilter: "blur(24px)" }}
    >
      <HStack spacing="$1">
        <Anchor href="https://github.com/alist-org/alist" external>
          {t("home.footer.powered_by")}
        </Anchor>
        <span>|</span>
        <AnchorWithBase
          as={Link}
          href={UserMethods.is_guest(me()) ? "/@login" : "/@manage"}
        >
          {t(UserMethods.is_guest(me()) ? "login.login" : "home.footer.manage")}
        </AnchorWithBase>
      </HStack>
      <HStack spacing="$1">© 2015-2025 Xiaoran Studio</HStack>
    </VStack>
  )
}
