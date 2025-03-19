import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import header from '../components/Common/Header/header.module'
import opensectionModule from "../components/OptionsSection/opensection.module";
import whyweModule from "../components/WhyWe/whywe.module";
import FaqSectionModule from "../components/Main/FaqSection/FaqSection.module";
import WeGivesYouModule from "../components/WeGivesYou/WeGivesYou.module";
import KnowsYourRightsModule from "../components/Knows Your Rights/components/KnowsYourRights.module";
import CompensationInfoModule from "../Pages/FlightDelay/CompensationInfo/CompensationInfo.module";
import CompensationIfModule from "../Pages/FlightDelay/CompensationIf/CompensationIf.module";
import CompensationHowMuchModule from "../Pages/FlightDelay/CompensationHowMuch/CompensationHowMuch.module";
import BeAwareModule from "../Pages/FlightDelay/BeAware/BeAware.module";
import FlightCancellationCompensationInfo from "../Pages/FlightCancellation/CompensationInfo/CompensationInfo.module";
import FlightCancellationCompensationif from "../Pages/FlightCancellation/CompensationIf/CompensationIf.module";
import FlightCancellationCompensationHowMuch from "../Pages/FlightCancellation/CompensationHowMuch/CompensationHowMuch.module";
import FlightCancellationBeAware from "../Pages/FlightCancellation/BeAware/BeAware.module";

import AboutUsSectionModule from "../Pages/About Us/ABout Us Section/AboutUsSection.module";
import OurCoreValuesModule from "../Pages/About Us/Our core values/OurCoreValues.module";
import ContactUsSectionModule from "../Pages/Contact Us/Contact Us Section/ContactUsSection.module";
import FeedBackCompModule from "../Pages/Contact Us/Feedback Form/FeedBackComp.module";

import OverBookedCompensationInfo from "../Pages/OverBookedFlight/CompensationInfo/CompensationInfo.module";
import OverBookedCompensationIfModule from "../Pages/OverBookedFlight/CompensationIf/CompensationIf.module";
import CompensationUSAModule from "../Pages/OverBookedFlight/CompensationUSA/CompensationUSA.module";
import CompensationEUModule from "../Pages/OverBookedFlight/CompensationEU/CompensationEU.module";
import OverBookedBeAwareModule from "../Pages/OverBookedFlight/BeAware/BeAware.module";
import MissedConnectionCompensationInfo from "../Pages/MissedConnection/CompensationInfo/CompensationInfo.module";
import MissedConnectionCompensationIfModule from "../Pages/MissedConnection/CompensationIf/CompensationIf.module";
import MissedConnectionCompensationUSAModule from "../Pages/MissedConnection/CompensationUSA/CompensationUSA.module";
import MissedConnectionCompensationEUModule from "../Pages/MissedConnection/CompensationEU/CompensationEU.module";
import MissedConnectionBeAwareModule from "../Pages/MissedConnection/BeAware/BeAware.module";
import LostLuggageModule from "../Pages/LostLuggage/LostLuggage.module";
import footerModule from "../components/Common/Footer/footer.module";

import tableoneModule from "../components/Tables/tableone/tableone.module";
import tabletwoModule from "../components/Tables/tabletwo/tabletwo.module";
import tablethreeModule from "../components/Tables/tablethree/tablethree.module";
import tablefourModule from "../components/Tables/tablefour/tablefour.module";
import TablefiveModule from "../components/Tables/tablefive/Tablefive.module";

import SubmitLinkModule from "../components/UI/SubmitLink.module";
import FormModule from "../components/Form/Form.module";
import AboutPilots from "../Pages/Blog page/About Pilots/aboutpilots.module";
import cancelledflightsModule from "../Pages/Blog page/CancelledFlights/cancelledflights.module";
import MechanicalIssues from "../Pages/Blog page/Mechanical Issues/machanical.module";
import PetsInPlanes from "../Pages/Blog page/Pets in planes/petsinplanes.module";
import SubmitClaimModule from "../Pages/FAQ page/SubmitClaim/SubmitClaim.module";
import DocprivacyModule from "../Pages/FAQ page/Documents and privacy/Docprivacy.module";
import PassModule from "../Pages/FAQ page/Air passenger Law/Pass.module";
import FeesandPayoutModule from "../Pages/FAQ page/Fees and payout methods/FeesandPayout.module";
import NewHeader from "../NewPages/NewCommon/Header/Newheader.module";
import NewSubmitLinkModule from "../NewPages/NewUI/NewSubmitLink.module";

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    ...header.en,
                    ...opensectionModule.en,
                    ...whyweModule.en,
                    ...FaqSectionModule.en,
                    ...WeGivesYouModule.en,
                    ...KnowsYourRightsModule.en,

                    ...CompensationInfoModule.en,
                    ...CompensationIfModule.en,
                    ...CompensationHowMuchModule.en,
                    ...BeAwareModule.en,

                    ...FlightCancellationCompensationInfo.en,
                    ...FlightCancellationCompensationif.en,
                    ...FlightCancellationCompensationHowMuch.en,
                    ...FlightCancellationBeAware.en,

                    ...AboutUsSectionModule.en,
                    ...OurCoreValuesModule.en,
                    ...ContactUsSectionModule.en,
                    ...FeedBackCompModule.en,

                    ...OverBookedCompensationInfo.en,
                    ...OverBookedCompensationIfModule.en,
                    ...CompensationUSAModule.en,
                    ...CompensationEUModule.en,
                    ...OverBookedBeAwareModule.en,
                    ...MissedConnectionCompensationInfo.en,
                    ...MissedConnectionCompensationIfModule.en,
                    ...MissedConnectionCompensationUSAModule.en,
                    ...MissedConnectionCompensationEUModule.en,
                    ...MissedConnectionBeAwareModule.en,
                    ...LostLuggageModule.en,
                    ...footerModule.en,

                    ...tableoneModule.en,
                    ...tabletwoModule.en,
                    ...tablethreeModule.en,
                    ...tablefourModule.en,
                    ...TablefiveModule.en,

                    ...SubmitLinkModule.en,
                    ...FormModule.en,


                    ...AboutPilots.en,
                    ...cancelledflightsModule.en,
                    ...MechanicalIssues.en,
                    ...PetsInPlanes.en,
                    ...SubmitClaimModule.en,
                    ...DocprivacyModule.en,
                    ...PassModule.en,

                    ...FeesandPayoutModule.en,

                    ...NewHeader.en,
                    ...NewSubmitLinkModule.en,
                }
            },
            ka: {
                translation: {
                    ...header.ka,
                    ...opensectionModule.ka,
                    ...whyweModule.ka,
                    ...FaqSectionModule.ka,
                    ...WeGivesYouModule.ka,
                    ...KnowsYourRightsModule.ka,

                    ...CompensationInfoModule.ka,
                    ...CompensationIfModule.ka,
                    ...CompensationHowMuchModule.ka,
                    ...BeAwareModule.ka,

                    ...FlightCancellationCompensationInfo.ka,
                    ...FlightCancellationCompensationif.ka,
                    ...FlightCancellationCompensationHowMuch.ka,
                    ...FlightCancellationBeAware.ka,

                    ...AboutUsSectionModule.ka,
                    ...OurCoreValuesModule.ka,
                    ...ContactUsSectionModule.ka,
                    ...FeedBackCompModule.ka,

                    ...OverBookedCompensationInfo.ka,
                    ...OverBookedCompensationIfModule.ka,
                    ...CompensationUSAModule.ka,
                    ...CompensationEUModule.ka,
                    ...OverBookedBeAwareModule.ka,
                    ...MissedConnectionCompensationInfo.ka,
                    ...MissedConnectionCompensationIfModule.ka,
                    ...MissedConnectionCompensationUSAModule.ka,
                    ...MissedConnectionCompensationEUModule.ka,
                    ...MissedConnectionBeAwareModule.ka,
                    ...LostLuggageModule.ka,
                    ...footerModule.ka,

                    ...tableoneModule.ka,
                    ...tabletwoModule.ka,
                    ...tablethreeModule.ka,
                    ...tablefourModule.ka,
                    ...TablefiveModule.ka,

                    ...SubmitLinkModule.ka,
                    ...FormModule.ka,


                    ...AboutPilots.ka,
                    ...cancelledflightsModule.ka,
                    ...MechanicalIssues.ka,
                    ...PetsInPlanes.ka,
                    ...SubmitClaimModule.ka,
                    ...DocprivacyModule.ka,
                    ...PassModule.ka,
                    ...FeesandPayoutModule.ka,

                    ...NewHeader.ka,    
                    ...NewSubmitLinkModule.ka,
                }
            }
        }
    })

export default i18n