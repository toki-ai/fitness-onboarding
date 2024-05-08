import { SelectPage } from "@/shared/type";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: String;
    selectPage: SelectPage;
    setSelectPage: (value : SelectPage) => void
}

const Link = ({page, selectPage, setSelectPage} : Props) => {
    const upperCasePage = page.toLocaleUpperCase().replace(/ /g, "") as SelectPage;
    return (
        <AnchorLink
            href={`#${upperCasePage}`}
            className={`duration-500 hover:text-primary-300
                        ${selectPage === upperCasePage ? 'text-primary-500' : '' }`}
            onClick={() => setSelectPage(upperCasePage)}
        >{page}</AnchorLink>
    )
}

export default Link
