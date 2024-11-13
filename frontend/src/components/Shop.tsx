import Menu from "./Menu";
import MenuIcon from '@mui/icons-material/Menu';

const Shop = () => {
  return (

    <div>
      <h1>自治体・お店の画面</h1>
      {/*ハンバーガーメニュー*/}
      <div style={{position: "absolute",top: "0px",left: "0px",}}>
        <Menu/>
        <MenuIcon style={{width: "30px", height: "30px", padding: "5px 10px 3px"}}/>
      </div>
    </div>
  );
};

export default Shop;