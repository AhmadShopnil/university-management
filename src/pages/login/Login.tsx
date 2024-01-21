/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";

import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { verifyJwtToken } from "../../utils/verifyJwtToken";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [login, { isError }] = useLoginMutation();
  const dispatch = useAppDispatch();

  console.log(isError);
  // console.log(data);
  // console.log(error);

  const onSubmit = async (data: any) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };

    const res = await login(userInfo).unwrap();

    const user = verifyJwtToken(res.data.accessToken);
    dispatch(setUser({ user: user, token: res.data.accessToken }));
    // if (isSuccess) {
    //   console.log("login success:");
    //   dispatch(setUser({ user: user, token: res.data.accessToken }));
    // }
  };

  return (
    <div>
      <h1>All Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="id">Id:</label>
          <input type="text" id="id" {...register("id")} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" {...register("password")} />
        </div>
        <Button htmlType="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
