import { useEffect, useState } from "react";


const Captcha = ({ onVerify, length = 6, reset, chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" }) => {
    const [captchaText, setCaptchaText] = useState("")
    const [userInput, setUserInput] = useState("")

    const generateCaptcha = () => {
        let text = "";
        for (let i = 0; i < length; i++) {
            text += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        setCaptchaText(text)
    }

    const handleOnChange = (e) => {
        const input = e.target.value;
        setUserInput(input)
        onVerify(input === captchaText)
    }

    useEffect(() => {
        generateCaptcha();
    }, [])
    
    useEffect(()=>{
        if(reset){
            setUserInput("")
        }
    },[reset])

    return (
        <div>
            <div className="d-flex align-items-center ">
                <div className="captcha-box py-1 ">{captchaText}</div>
                <button
                    id="refreshButton"
                    type="button"
                    className="btn captcha-custom-btn ms-sm-4 ms-2"
                    onClick={generateCaptcha}
                >
                    <i className="fa fa-refresh"></i>
                </button>
            </div>
            <input
                type="text"
                className="from-control my-4 col-lg-6"
                onChange={handleOnChange}
                value={userInput}
                placeholder="Enter the above CAPTCHA" />

        </div>
    )
}

export default Captcha