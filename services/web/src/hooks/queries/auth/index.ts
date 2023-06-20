import { instance } from "@/helpers/axios";
import { useMutation } from "@tanstack/react-query";
import { URI } from "@package/constant";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { Auth } from "@package/api-types";

const route = instance(URI.AUTH);

export const useSignUp = (form: Auth.SignUpReq) => {
  return useMutation([URI.SIGN_UP], () => route.post(URI.SIGN_UP, form), {
    onSuccess: () => {
      const router = useRouter();
      toast.success("회원가입 성공");
      router.push("/");
    },
    onError: () => {
      toast.error("회원가입 성공");
    },
  });
};

export const useSignIn = () => {};
