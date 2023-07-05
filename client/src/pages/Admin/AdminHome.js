import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className='container'>
        <div className='d-felx flex-column mt-4'>
          <h1>
            Welcome Admin <i className='text-success'>{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            Our blood bank management app is a comprehensive solution designed
            to simplify and streamline the processes involved in managing a
            blood bank or blood donation center. With an intuitive interface and
            powerful features, our app revolutionizes the way blood donation and
            inventory management are handled. Donors can easily register,
            providing their personal information, medical history, and blood
            type, while administrators can efficiently manage donor records,
            contact details, and donation history. The app also includes robust
            inventory management capabilities, allowing for accurate tracking of
            blood types, quantities, expiration dates, and storage locations.
            With our app, healthcare facilities and individuals in need of blood
            can submit requests, and our system automatically matches and
            coordinates the requested blood type with available donors or blood
            units. Additionally, users can conveniently schedule donation
            appointments, reducing wait times and enhancing the overall donor
            experience. Real-time notifications and alerts keep donors, blood
            bank staff, and recipients informed about upcoming appointments, low
            inventory levels, and emergency blood requests. Our blood bank
            management app is a game-changer, ensuring efficient operations,
            improving donor engagement, and ultimately saving lives through
            effective blood management. Regenerate response
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
