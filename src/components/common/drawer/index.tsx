import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Text,
  IconButton,
  Link,
  DrawerFooter,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import { DiGithubAlt } from "react-icons/di";
import { IconButtonCustom } from "../iconButton";

const SimpleDrawer: React.FC = (): React.ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = useRef();

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        icon={<HamburgerIcon />}
        aria-label={"Menu"}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Waifuland</DrawerHeader>

          <DrawerBody>
            <Link href="/">
              <Text>Home</Text>
            </Link>
            <Link href="/docs">
              <Text>Documentation</Text>
            </Link>
            <Link href="/images">
              <Text>Images</Text>
            </Link>
          </DrawerBody>
          <DrawerFooter display="flex" justifyContent="center">
            <IconButtonCustom
              link="https://github.com/jd-apprentice/waifuland-fe"
              icon={DiGithubAlt}
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SimpleDrawer;
