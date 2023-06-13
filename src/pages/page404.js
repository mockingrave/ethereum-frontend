import React from "react";
import theme from "theme";
import {Button, Link, Section, Text, Theme} from "@quarkly/widgets";
import {Helmet} from "react-helmet";
import {GlobalPageStyles} from "global-page-styles";
import {Override} from "@quarkly/components";
import * as Components from "components";
import {MdMenu} from "react-icons/md";

export default (() => {
    return <Theme theme={theme}>
        <GlobalPageStyles pageUrl={"404"}/>
        <Helmet>
            <title>
                NOT FOUND
            </title>
            <meta name={"description"} content={""}/>
            <link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"}
                  type={"image/x-icon"}/>
        </Helmet>
        <Section padding="16px 0 16px 0" quarkly-title="Header" align-items="center" justify-content="center">
            <Override
                slot="SectionContent"
                display="grid"
                grid-template-columns="repeat(3, 1fr)"
                md-grid-template-columns="repeat(2, 1fr)"
                margin="0px 32px 0px 32px"
                width="100%"
                md-margin="0px 16px 0px 16px"
            />
            <Link href="/" position="relative" transition="opacity 200ms ease" quarkly-title="Link"/>
            <Components.BurgerMenu md-display="flex" md-align-items="center" md-justify-content="flex-end">
                <Override
                    slot="menu"
                    lg-transition="transform 400ms ease 0s"
                    md-position="fixed"
                    display="flex"
                    md-top={0}
                    padding="0px 0 0px 0"
                    align-items="center"
                    lg-transform="translateY(0px) translateX(0px)"
                    md-width="100%"
                    md-height="100%"
                    justify-content="center"
                    md-left={0}
                >
                    <Override
                        slot="item"
                        text-transform="uppercase"
                        text-align="center"
                        padding="8px 20px 8px 20px"
                        md-padding="16px 40px 16px 40px"
                        display="inline-block"
                    />
                    <Override slot="item-404" lg-display="none" display="none"/>
                    <Override slot="item-certificate" lg-display="none" display="block"/>
                    <Override
                        slot="link"
                        transition="opacity .15s ease 0s"
                        hover-opacity="1"
                        md-font="16px/24px sans-serif"
                        color="--dark"
                        font="--base"
                        text-transform="initial"
                        md-transition="opacity .15s ease 0s"
                        md-active-opacity="1"
                        text-decoration-line="initial"
                        letter-spacing="0.5px"
                        md-hover-opacity="1"
                        opacity=".5"
                        md-color="--dark"
                        md-opacity=".5"
                    />
                    <Override
                        slot="link-active"
                        md-opacity="1"
                        md-cursor="default"
                        opacity="1"
                        color="--primary"
                        cursor="default"
                    />
                    <Override slot="item-contact" display="none"/>
                    <Override slot="item-work" display="none"/>
                </Override>
                <Override slot="icon,icon-close" category="md" icon={MdMenu}/>
                <Override
                    slot="icon"
                    category="md"
                    icon={MdMenu}
                    size="36px"
                    md-right="0px"
                    md-position="relative"
                />
                <Override
                    slot="menu-open"
                    md-display="flex"
                    md-flex-direction="column"
                    md-align-items="center"
                    md-justify-content="center"
                    md-top={0}
                    md-bottom={0}
                />
                <Override slot="icon-open" md-position="fixed" md-top="18px" md-right="18px"/>
            </Components.BurgerMenu>

        </Section>
        <Section
            lg-padding="25px 0 25px 0"
            sm-padding="0px 0 25px 0"
            justify-content="center"
            padding="25px 0 75px 0"
            sm-align-items="center"
            sm-justify-content="center"
            quarkly-title="Hero"
        >
            <Override
                slot="SectionContent"
                md-margin="0px 16px 0px 16px"
                width="100%"
                background="linear-gradient(180deg,rgba(108, 252, 247, 0.15) 0%,transparent 100%) 0 0 no-repeat"
                height="620px"
                justify-content="center"
                sm-width="100%"
                min-width="auto"
                margin="0px 32px 0px 32px"
                align-items="center"
                lg-height="520px"
                md-height="420px"
                md-padding="0px 24px 0px 24px"
                display="flex"
                position="relative"
            />
            <Text
                font="--headline1"
                margin="16px 0px 0px 0px"
                sm-text-align="center"
                sm-width="80%"
                lg-text-align="center"
                lg-font="--headline2"
                color="--dark"
            >
                404
            </Text>
        </Section>

    </Theme>;
});