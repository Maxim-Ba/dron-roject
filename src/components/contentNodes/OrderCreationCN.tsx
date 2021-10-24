import { CSSProperties, FunctionComponent, useEffect } from "react";
import { Row, Col, Button } from "antd";
import CustomCascader from "../CustomCascader";
import CustomDatePicker from "../CustomDatePicker";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { customButtonsStyleType } from "../../types/buttonTypes";
import { customStyleButton, gray} from "../../custom-styles-for-antd/styleVariables";
import { NavLink } from "react-router-dom";
import AddButton from "../buttons/AddButton";
import RawMaterialItem from "../RawMaterialItem/RawMaterialItem";
import { routesEnum } from "../../types/routes";
import { generateCSSColor } from "../../utils/generateCSSColor";

interface OrderCreationCNProps {

}


const width: CSSProperties = {
  minWidth: 196
};
const { block, shape, style, type, } = customStyleButton;


const OrderCreationCN: FunctionComponent<OrderCreationCNProps> = () => {
  const {isContentOnRight:isOnRight,isNextBtnDisabled} = useTypedSelector(state => state.orderCreation);

  const { setOnRight, setOnLeft } = useActions();
  const rawMaterialList = useTypedSelector(state => state.orderCreation.rawMaterialList);
  const {
    backBackgroundBack,
    backBackgroundNext,
    btnColorBack,
    btnColorNext,
    generalBackground,
    generalColor,
  } = useTypedSelector(state=>state.options);
  useEffect(function () {
    return () => { setOnLeft();};
  }, []);

  return (
    <>
      <Header buttonName={customButtonsStyleType.orderCreation} />
      <div 
          style={
            {
              backgroundColor: generateCSSColor(generalBackground),
              color: generateCSSColor(generalColor)
            }}
          className={isOnRight ? "transform-translate order-creation" : 'order-creation'}
      >
        <section 
          className="order-creation__section"
        >

          <Row gutter={[0, 16]} justify='center' align="top">
            <Col span={24} className="order-creation__item"><CustomCascader defaultValue={""} /></Col>
            <Col span={24} className="order-creation__item"><CustomCascader defaultValue={""} /></Col>
            <Col span={24} className="order-creation__item"><CustomDatePicker props={{ width: width }} /></Col>
          </Row>
        </section>

        <section className="order-creation__section order-creation__section_j-c-center">
          {rawMaterialList.map((rawMaterial, index: number) => {
            return <RawMaterialItem  key={index} index={index} />;
                })}
          <AddButton />
        </section>

      </div>
      <Footer >

        <div className="order-creation__button-wrapper">
          <NavLink to={routesEnum.ORDER_MANAGER} className="order-creation__navlink">
            <Button
              block={block}
              type={type}
              shape={shape}
              style={{ ...style,
                backgroundColor: generateCSSColor(backBackgroundBack), 
                color: generateCSSColor(btnColorBack)
              }}
            >
              {customButtonsStyleType.cancel}
            </Button>
          </NavLink>
          
          <div className="order-creation__navlink">
            <Button
              block={block}
              type={type}
              shape={shape}
              style={{ ...style,
                backgroundColor: generateCSSColor(backBackgroundNext), 
                color: generateCSSColor(btnColorNext)
              }}
              disabled={!isNextBtnDisabled}
              onClick={isOnRight ? undefined : setOnRight}
            >
              {customButtonsStyleType.next}
            </Button>
          </div>


        </div>
      </Footer>
    </>
  );
};

export default OrderCreationCN;