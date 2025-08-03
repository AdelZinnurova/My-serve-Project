type ListProps = {
    className?: string
}

export const List = ({className}: ListProps) => {
    return (
        <ul className={className}>
            <li><a href="#section1">Home</a></li>
            <li><a href="#section2">Product</a></li>
            <li><a href="#section3">Users</a></li>
            <li><a href="#section4">About us</a></li>
            <li><a href="#section5">Contacts</a></li>
        </ul>
    );
};