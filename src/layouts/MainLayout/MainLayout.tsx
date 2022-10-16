import { FC, ReactNode } from "react";
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./MainLayout.module.css";

interface IMainLayoutProps {
  children: ReactNode;
};

const MainLayout: FC<IMainLayoutProps> = (props) => {

    return (
      <div>
        <Navbar />
        {props.children}
      </div>
    );
};

export default MainLayout;