import React, { useEffect } from "react";
import "./marketplace.css";
import laptop from "../../assets/laptop.jpg";
import phone from "../../assets/phone.jpg";
import headphone from "../../assets/headphone.jpg";

const data = [{ id: 1, name: "" }];

const Marketplace = () => {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const [selectedProduct, setSelectedProduct] = useState(null);
  // const router = useRouter();

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true);
  //     try {
  //       const { data, error } = await supabase.from("products").select();
  //       setProducts(data);
  //       if (error) throw error;
  //     } catch (err) {
  //       console.log("Error in fetching products: " + err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getData();
  // }, []);

  return (
    <div className="marketplace">
      <h1>Marketplace</h1>
      <div className="body">
        <div className="card">
          <img src={laptop} alt="laptop" />
          <div className="cardbody">
            <p>Laptop Apple</p>
            <p>300 tokens</p>
          </div>
        </div>
        <div className="card">
          <img src={phone} alt="laptop" />
          <div className="cardbody">
            <p>phone Oppo</p>
            <p>1000 tokens</p>
          </div>
        </div>
        <div className="card">
          <img src={headphone} alt="laptop" />
          <div className="cardbody">
            <p>headphone Boat</p>
            <p>800 tokens</p>
          </div>
        </div>
        <div className="card">
          <img src={laptop} alt="laptop" />
          <div className="cardbody">
            <p>Laptop Apple</p>
            <p>300 tokens</p>
          </div>
        </div>
        <div className="card">
          <img src={phone} alt="laptop" />
          <div className="cardbody">
            <p>phone Oppo</p>
            <p>580 tokens</p>
          </div>
        </div>
        <div className="card">
          <img src={headphone} alt="laptop" />
          <div className="cardbody">
            <p>headphone Boat</p>
            <p>990 tokens</p>
          </div>
        </div>
        <div className="card">
          <img src={phone} alt="laptop" />
          <div className="cardbody">
            <p>phone Oppo</p>
            <p>300 tokens</p>
          </div>
        </div>
        {/* <div className="card">
          <img src={laptop} alt="laptop" />
          <div className="cardbody">
          <p>Laptop Apple</p>
          <p>300 tokens</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Marketplace;
