import React, { useEffect } from "react";
import "./marketplace.css";

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
    </div>
  );
};

export default Marketplace;
