import { useEffect, useState } from "react";
import { getServices } from "../../api/servicesAPI";
import { FriendsList } from "../../Components/FriendsList/friendsList";
import { OurFriendsContainer, OurFriendsHero } from "./ourFriendPage.styled";
import { IService } from "../../interfaces/servicInterface";
import axios, { AxiosError } from "axios";
import { ErrorFiller } from "../../Components/Error/error";

const OurFriendsPage = () => {
  const [servicesList, setServicesList] = useState<IService[]>([]);
  const [error, setError] = useState<AxiosError | null>(null);

  const fetchServices = async () => {
    try {
      const response = await getServices();
      setServicesList(response.data.service);
      
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error);
      }
      return null;
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <OurFriendsContainer>
      <OurFriendsHero>Our Friends</OurFriendsHero>
      {error ? (
        <ErrorFiller></ErrorFiller>
      ) : (
        <FriendsList serviceList={servicesList}></FriendsList>
      )}
    </OurFriendsContainer>
  );
};

export default OurFriendsPage;
