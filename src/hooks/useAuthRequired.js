import { useToast } from "@chakra-ui/react";
import { auth } from "../services/firebase";

const useAuthRequired = (callback) => {
  const toast = useToast();

  const authRequired = () => {
    if (auth.currentUser) {
      callback();
    } else {
      toast({
        status: "error",
        variant: "left-accent",
        title: `You must login to access the content.`,
        position: "bottom-left",
        isClosable: true,
      });
    }
  };

  return authRequired;
};

export default useAuthRequired;
