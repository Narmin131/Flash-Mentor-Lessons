import { Dna } from "react-loader-spinner";

const Preloader = () => {
  return (
    <>
      <section style={{width:'100%', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </section>
    </>
  );
};

export default Preloader;
