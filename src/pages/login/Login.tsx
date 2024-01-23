/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";

import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { TUser, setUser } from "../../redux/features/auth/authSlice";
import { verifyJwtToken } from "../../utils/verifyJwtToken";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  // console.log(isError);

  const onSubmit = async (data: FieldValues) => {
    const tostId = toast.loading("Logging.... please wait!", {
      duration: 1000,
    });

    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();

      const user = verifyJwtToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logging Success", { id: tostId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("Logging Success", { id: tostId, duration: 2000 });
    }
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
