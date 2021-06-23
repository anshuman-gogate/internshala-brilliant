import React , {useRef} from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import EmailIcon from '@material-ui/icons/Email';

function Overlay(props) {
    const modalRef = useRef(null);
    const setModalDisplay = props.setModalDisplay;
    

    function closeModal(e) {
        if(modalRef.current === e.target) {
            setModalDisplay("none");
            document.body.style.overflow = "auto";
            document.body.style.overflowX = "hidden";
        }
    }

    const styles = {
        display: props.modalDisplayVal
    }
    return (
        <div className="overlay" style={styles} ref={modalRef} onClick={closeModal}>
            <div className="modal" >
                <div className="modal__left">
                    <i class="fas fa-rocket"></i>
                </div>
                <div className="modal__right">
                    <h3 className="modal__title">Excel in math and science.</h3>
                    <div className="modal__links">
                        <a href="#" className="modal__link modal__link--fb"><FacebookIcon style={{marginRight: "0.5rem"}}/> Join using facebook</a>
                        <a href="#" className="modal__link modal__link--google"><EmailIcon style={{marginRight: "0.5rem"}}/> Join using google</a>
                        <a href="#" className="modal__link modal__link--email">Join using email</a>
                    </div>
                    <p className="modal__existing-user">Existing user? <a href="">Log in</a></p>
                </div>
            </div>
        </div>
    )
}

export default Overlay
