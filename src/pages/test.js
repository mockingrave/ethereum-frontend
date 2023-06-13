import React from "react";
import theme from "theme";
import {Box, Button, Image, Input, Link, Section, Text, Theme} from "@quarkly/widgets";
import {Helmet} from "react-helmet";
import {GlobalPageStyles} from "global-page-styles";
import {Override, SocialMedia} from "@quarkly/components";
import * as Components from "components";
import {MdMenu} from "react-icons/md";

export default (() => {
    return <Theme theme={theme}>
        <GlobalPageStyles pageUrl={"error404"}/>
        <Helmet>
            <title>
                Control | Website Certsystem
            </title>
            <meta name={"description"} content={""}/>
            <meta property={"og:title"} content={"Test | CertSystem"}/>
            <meta property={"og:description"} content={""}/>
            <meta property={"og:image"}
                  content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-certsystem-quarkly.png?v=2020-11-05T19:48:01.806Z"}/>
            <link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"}
                  type={"image/x-icon"}/>
        </Helmet>
        <Section padding="16px 0 16px 0" quarkly-title="Header" align-items="center" justify-content="center">
            <Override
                slot="SectionContent"
                md-margin="0px 16px 0px 16px"
                display="grid"
                grid-template-columns="repeat(3, 1fr)"
                md-grid-template-columns="repeat(2, 1fr)"
                margin="0px 32px 0px 32px"
                width="100%"
            />
            <Link
                transition="opacity 200ms ease"
                quarkly-title="Link"
                href="/"
                position="relative"
                font="--headline3"
                text-decoration-line="initial"
                color="--dark"
                display="flex"
                align-items="center"
            >
                CertSystem
            </Link>
            <Components.BurgerMenu md-align-items="center" md-justify-content="flex-end" md-display="flex">
                <Override
                    slot="menu-open"
                    md-bottom={0}
                    md-display="flex"
                    md-flex-direction="column"
                    md-align-items="center"
                    md-justify-content="center"
                    md-top={0}
                />
                <Override slot="icon-open" md-right="18px" md-position="fixed" md-top="18px"/>
                <Override
                    slot="menu"
                    lg-transition="transform 400ms ease 0s"
                    md-top={0}
                    align-items="center"
                    md-height="100%"
                    padding="0px 0 0px 0"
                    justify-content="center"
                    lg-transform="translateY(0px) translateX(0px)"
                    md-position="fixed"
                    display="flex"
                    md-left={0}
                    md-width="100%"
                >
                    <Override
                        slot="item"
                        padding="8px 20px 8px 20px"
                        md-padding="16px 40px 16px 40px"
                        display="inline-block"
                        text-transform="uppercase"
                        text-align="center"
                    />
                    <Override slot="item-404" lg-display="none" display="none"/>
                    <Override slot="item-certificate" lg-display="none" display="block"/>
                    <Override
                        slot="link"
                        color="--dark"
                        letter-spacing="0.5px"
                        md-transition="opacity .15s ease 0s"
                        font="--base"
                        text-transform="initial"
                        md-font="16px/24px sans-serif"
                        transition="opacity .15s ease 0s"
                        text-decoration-line="initial"
                        opacity=".5"
                        md-color="--dark"
                        md-opacity=".5"
                        hover-opacity="1"
                        md-hover-opacity="1"
                        md-active-opacity="1"
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
                font="--headline3"
                margin="16px 0px 0px 0px"
                sm-text-align="center"
                sm-width="80%"
                lg-text-align="center"
                lg-font="--headline2"
                color="--darkL2"
            >
                Поиск сертификатов
            </Text>
            <Input
                display="block"
                placeholder-color="LightGray"
                background="white"
                position="relative"
                top="20px"
                width="600px"
                left="0px"
                placeholder="Введите код сертификата"
            />
            <Button
                border-color="--color-primary"
                position="relative"
                top="-20px"
                right="0px"
                left="380px"
                display="inline"
                width="130px"
            >
                Найти
            </Button>
        </Section>
        <Section
            margin="0 0 0 0"
            padding="16px 0 16px 0"
            box-sizing="border-box"
            quarkly-title="Footer"
            justify-content="center"
        >
            <Override
                slot="SectionContent"
                width="100%"
                margin="0px 32px 0px 32px"
                md-margin="0px 16px 0px 16px"
                min-width="auto"
                display="none"
            />
            <Box
                display="grid"
                grid-gap="32px"
                width="100%"
                grid-template-columns="repeat(2, 1fr)"
                sm-grid-gap="16px"
            >
                <Box display="flex" align-items="center" sm-flex-wrap="wrap">
                    <Image
                        src="https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-quarkly-logo-grey.svg?v=2020-11-06T17:24:35.270Z"
                        width="28px" height="28px"/>
                    <Link
                        white-space="nowrap"
                        font="--base"
                        opacity="0.6"
                        text-decoration-line="initial"
                        text-align="left"
                        margin="1px 0px 0px 10px"
                        hover-text-decoration-line="underline"
                        href="https://quarkly.io/"
                        color="--dark"
                    >
                        Made on Quarkly
                    </Link>
                </Box>
                <SocialMedia facebook="https://www.facebook.com/quarklyapp/" twitter="https://twitter.com/quarklyapp"
                             youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
                             justify-content="flex-end">
                    <Override slot="link" background="none" border-radius="50%"/>
                    <Override slot="icon" color="--dark"/>
                </SocialMedia>
            </Box>
        </Section>

    </Theme>;
});