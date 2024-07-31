import styles from "./Button.module.css"

function Button() {

    const styleInline = {
            backgroundColor: "hsl(10, 100%, 50%)",
            color: "Gold",
            padding: "10px 20px" ,
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
        
    };

    return(
        <>    
            <button className="button">
                Click me
            </button>
            <button className={styles.button2}> 
                Click me -  Module
            </button>
            <button style={styleInline}> 
                Click me - Inline
            </button>
        </>
    );
};

export default Button;

// Button = External Css
// Button2 = Module Css
// Button3 = Inline Css