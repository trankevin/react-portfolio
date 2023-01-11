

const Footer = () => {
    const date = new Date();
    return (
        <footer>
            <p> &copy; {date.getFullYear()} Kevin Tran. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;