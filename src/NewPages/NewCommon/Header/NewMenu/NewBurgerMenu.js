import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./NewBurgerMenu.module.scss";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { siteTranslateAction } from "../../../../store/translate";
import icon from "../../../NewImages/arrowIcon.png";
import engFlag from "../../../../assetss/images/brtsh.jpg";
import geoFlag from "../../../../assetss/images/geo.jpg";

const NewBurgerMenu = ({IsOpen, setIsOpen}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.translate);

  const toggleMenu = () => {
    setIsOpen(!IsOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const data = [
    {
      title: t("menu.ourworld"),
      dropdown: [
        { link: "/our-world/about-us", title: t("menu.aboutus") },
        { link: "/our-world/mission-and-vision-activities", title: t("menu.missionandvisionactivities") },
        { link: "/our-world/partners", title: t("menu.partners") },
        { link: "/our-world/state-and-private-structures", title: t("menu.stateandprivatestructures") },
        { link: "/our-world/memoranda", title: t("menu.memoranda") },
        { link: "/our-world/branches", title: t("menu.branches") },
        { link: "/our-world/masterclasses", title: t("menu.masterclasses") },
        { link: "/our-world/scholarships", title: t("menu.scholarships")},
      ],
    },
    {
      title: t("menu.academy"),
      dropdown: [
        { link: "/academy/long-termcourses", title: t("menu.longtermcourses") },
        { link: "/academy/short-termcourses", title: t("menu.shorttermcourses") },
        { link: "/academy/teachers", title: t("menu.teachers") },
        { link: "/academy/cost-of-courses", title: t("menu.costofcourses") },
      ],
    },
    {
      title: t("menu.beyondtheclassroom"),
      dropdown: [
        { link: "/beyondtheclassroom/our-students-and-families", title: t("menu.ourstudentsandfamilies") },
        { link: "/beyondtheclassroom/socialization", title: t("menu.socialization") },
        { link: "/beyondtheclassroom/culturaltours", title: t("menu.culturaltours") },
        { link: "/beyondtheclassroom/fromonlinecoursestorealliferelationships", title: t("menu.fromonlinecoursestorealliferelationships") },
      ],
    },
    {
      title: t("menu.media"),
      dropdown: [
        { link: "/media/pressrelease", title: t("menu.pressrelease") },
        { link: "/media/photogallery", title: t("menu.photogallery") },
        { link: "/media/videogallery", title: t("menu.videogallery") },
        { link: "/media/blog", title: t("menu.blog") },
      ]
    },
    {
      link: "/contact",
      title: t("menu.contact"),
    },
  ];

  return (
    <div className={styles.container}>
      <nav>
        

        

        {/* Menu */}
        <ul className={`${styles.nav} ${IsOpen ? styles.open : ""}`}>
          {data?.map((item) => {
            const isActive =
              item.link === location.pathname ||
              item.dropdown?.some(
                (subItem) => subItem.link === location.pathname
              );

            return (
              <li
                className={`${styles.nav_item} ${
                  isActive ? styles.active : ""
                }`}
                key={item.title}
                onMouseEnter={() => item.dropdown && setShowDropdown(true)}
                onMouseLeave={() => item.dropdown && setShowDropdown(false)}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <div className={styles.dropdownTrigger}>
                  <Link className={styles.pages} to={item.link}>
                    {item.title}
                  </Link>
                  {item.dropdown && (
                    <img
                      src={icon}
                      alt="Dropdown Arrow"
                      className={styles.arrow}
                    />
                  )}
                </div>
                {item.dropdown && showDropdown && (
                  <ul className={styles.dropdown}>
                    {item.dropdown.map((subItem) => (
                      <li
                        key={subItem.title}
                        className={`${
                          subItem.link === location.pathname
                            ? styles.activeDropdownItem
                            : ""
                        }`}
                      >
                        <Link
                          className={styles.dropdown_item}
                          to={subItem.link}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
          
        </ul>
      </nav>
    </div>
  );
};

export default NewBurgerMenu;