import { Button } from "antd";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { blackText, customStyleButton, redColor, whiteColor } from "../../custom-styles-for-antd/styleVariables";
import { setOnLeftOrderViev } from "../../store/actionCreators/veiwOrderActions";
import { customButtonsStyleType } from "../../types/buttonTypes";
import { routesEnum } from "../../types/routes";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface EditClientsProps {

}

const { block, shape, type, style } = customStyleButton;

const EditClients: FunctionComponent<EditClientsProps> = () => {
    return (
        
        <>
            <Header buttonName={customButtonsStyleType.clients} />

            <div className={false ? "transform-translate order-creation" : 'order-creation'}>
                <section className="order-creation__section">
                    <Button
                        block={block}
                        shape={shape}
                        type={type}
                        style={style}
                        className="admin__button"
                    >
                        Добавить клиента
                    </Button>
                    <Button
                        block={block}
                        shape={shape}
                        type={type}
                        style={{...style, ...redColor}}
                        className="admin__button"
                    >
                        Удалить клиента
                    </Button>
                    <Button
                        block={block}
                        shape={shape}
                        type={type}
                        style={style}
                        className="admin__button"
                    >
                        Редактировать клиента
                    </Button>
                    <Button
                        block={block}
                        shape={shape}
                        type={type}
                        style={style}
                        className="admin__button"
                    >
                        Таблица клиентов
                    </Button>
                </section>


            </div>
            <Footer >
        <div className="order-creation__button-wrapper">
        <NavLink to={true ? routesEnum.ADMIN_CLIENTS : routesEnum.ADMIN} className="order-creation__navlink">
            <Button
              block={block}
              type={type}
              shape={shape}
              style={{ ...blackText, ...whiteColor, ...style }}
              onClick={true ? setOnLeftOrderViev : undefined} //поменять!!!!!!!

            >
              {true ? customButtonsStyleType.back : customButtonsStyleType.cancel} 
            </Button>
          </NavLink>
          <div className="order-creation__navlink">
            <Button
              block={block}
              type={type}
              shape={shape}
              style={style}
              disabled={true}
            >
              {customButtonsStyleType.next}
            </Button>
          </div>


        </div>
      </Footer>
        </>
    );
};

export default EditClients;