

const Header = ({title, subTitle}) => {
    return (
        <div>
            <div className="text-center family">
                <p>{subTitle}</p>
                <h3 className="font-semibold text-2xl">{title}</h3>
            </div>
        </div>
    );
};

export default Header;