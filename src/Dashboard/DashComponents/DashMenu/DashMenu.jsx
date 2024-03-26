import PropTypes from 'prop-types';
import { donorMenu, generalUserMenu, sellerMenu } from '../../../data/data';

const DashMenu = ({ role }) => {
    let menuItems;
    if (role === 'general') {
        menuItems = generalUserMenu;
    } else if (role === 'donor') {
        menuItems = donorMenu;
    } else if (role === 'seller') {
        menuItems = sellerMenu;
    }
    return (
        <div className=" space-y-6 min-h-screen">
            <div>
                <ul className="menu rounded-box">
                    {menuItems.menuItems.map((menuItem, index) => (
                        <li key={index}>
                            {!menuItem.subItems ? (
                                <a href={menuItem.link}>{menuItem.name}</a>
                            ) : (
                                <details>
                                    <summary>{menuItem.name}</summary>
                                    <ul>
                                        {menuItem.subItems.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <a href={subItem.link}>{subItem.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

DashMenu.propTypes = {
    role: PropTypes.oneOf(['general', 'donor', 'seller']).isRequired,
};
export default DashMenu;