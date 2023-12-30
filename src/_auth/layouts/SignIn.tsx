/* eslint-disable @typescript-eslint/no-explicit-any */
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { routerData } from "@/router/routerData";
import { SignUp } from "..";

export const SigninFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

const SignIn = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof SigninFormSchema>>({
    resolver: zodResolver(SigninFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SigninFormSchema>) {
    console.log("Form");
    setLoading(true);
    alert(JSON.stringify(values, null, 2));
    setTimeout(() => {
      setLoading(false);
      toast({
        variant: "success",
        title: "Login successful!",
      });
      navigate(routerData.dashboard.path);
    }, 2000);
  }

  return (
    <div>
      <div className="flex flex-col-reverse items-center mb-4 gap-2">
        <div className="text-center flex flex-col gap-2">
          <h2 className="text-3xl font-semibold font-primary text-MainGrey-500">
            Sign in -{" "}
            <span className="text-MainBlue-500 font-semibold">Geeknomix</span>
          </h2>
          <p className="text-MainGrey-400 text-sm">to access your Dashboard</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-full max-w-[120px] p-4 aspect-square rounded-full bg-MainBlue-50 grid place-content-center ">
            <img
              src="/favicon.svg"
              alt="folder logo"
              className="w-[90%] object-contain mx-auto"
            />
          </div>
        </div>
      </div>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
            <div className="mb-4 flex flex-col gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-MainGrey-500">
                      Email Address
                    </FormLabel>
                    <FormControl className="bg-lightBlack">
                      <Input
                        placeholder="Email Address"
                        className="placeholder:text-MainGrey-300 font-primary text-MainGrey-500"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-MainGrey-500 font-primary">
                      Password
                    </FormLabel>
                    <div>
                      <FormControl className="">
                        <Input
                          type="password"
                          placeholder="*******"
                          className="placeholder:text-MainGrey-300 font-primary"
                          {...field}
                        />
                      </FormControl>
                      <div className="text-xs flex flex-row justify-end w-full mt-2 underline text-MainBlue-500">
                        {/* todo: forgot password link  */}
                        <Link to="#">Forgot password?</Link>
                      </div>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              size={"lg"}
              className="text-white font-primary w-full"
              disabled={loading}
            >
              {loading ? "Loading..." : "Sign in"}
            </Button>
          </form>
        </Form>
        <div className="flex justify-center mt-4">
          <p className="text-MainGrey-300 flex flex-row gap-2 items-center">
            Don't have an account? <SignUp />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
