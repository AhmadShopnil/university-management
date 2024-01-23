import { useGetAcademicSemisterQuery } from "../../../redux/features/academicSemister/academicSemisterApi";

const GetAcademicSemister = () => {
  const { data } = useGetAcademicSemisterQuery(undefined);
  console.log(data);
  return <div>GeAcademicSemister</div>;
};

export default GetAcademicSemister;
