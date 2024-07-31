
function Footer() {  // Essa função retorna o componente Footer
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Your website name</p>
        </footer>
    )
}

export default Footer;   // Permite exporta o componete footer para outro componente