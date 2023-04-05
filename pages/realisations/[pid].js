import { useRouter } from "next/router";

const Realisation = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <p>Realisation: {pid}</p>;
};

export default Realisation;
