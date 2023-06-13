import React from "react";
import theme from "theme";
import {Box, Button, Icon, Input, Link, List, Section, Text, Theme} from "@quarkly/widgets";
import {Helmet} from "react-helmet";
import {GlobalPageStyles} from "global-page-styles";
import {Override} from "@quarkly/components";
import {MdAccountBox} from "react-icons/md";
import MainMenu from "./parts";

export default (() => {
    return <Theme theme={theme}>
        <GlobalPageStyles pageUrl={"search"}/>
        <Helmet>
            <title>
                Search | Certsystem
            </title>
            <meta name={"description"} content={""}/>
            <meta property={"og:title"} content={"Search | CertSystem"}/>
            <meta property={"og:description"} content={""}/>
            <meta property={"og:image"}
                  content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-certsystem-quarkly.png?v=2020-11-05T19:48:01.806Z"}/>
            <link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"}
                  type={"image/x-icon"}/>
        </Helmet>
        <Section quarkly-title="Header" align-items="center" justify-content="center" padding="16px 0 16px 0">
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

            <MainMenu/>

        </Section>
        <Section
            lg-padding="25px 0 25px 0"
            sm-padding="0px 0 25px 0"
            justify-content="center"
            padding="25px 0 75px 0"
            sm-align-items="center"
            sm-justify-content="center"
            quarkly-title="Hero"
            min-height="none"
        >
            <Override
                slot="SectionContent"
                md-margin="0px 16px 0px 16px"
                width="100%"
                background="linear-gradient(180deg,rgba(108, 252, 247, 0.15) 0%,transparent 100%) 0 0 no-repeat"
                height="auto"
                justify-content="center"
                sm-width="100%"
                min-width="100%"
                margin="0px 32px 0px 32px"
                align-items="center"
                lg-height="520px"
                md-height="420px"
                md-padding="0px 24px 0px 24px"
                display="flex"
                position="relative"
                text-align="left"
                flex="0 0 auto"
                max-width="100%"
                min-height="100%"
            />
            <Box
                min-width="100px"
                min-height="100px"
                quarkly-title="textBox"
                display="flex"
                align-items="center"
                justify-content="center"
                align-content="flex-end"
                flex-direction="row"
                align-self="stretch"
            >
                <Text
                    font="--headline3"
                    margin="16px 0px 0px 0px"
                    sm-text-align="center"
                    sm-width="80%"
                    lg-text-align="center"
                    lg-font="--headline2"
                    color="--darkL2"
                    text-align="center"
                >
                    Поиск сертификатов
                </Text>
            </Box>
            <Box
                min-width="100px"
                min-height="100px"
                quarkly-title="searchBox"
                display="flex"
                align-items="center"
                justify-content="center"
                position="static"
                align-content="stretch"
                align-self="stretch"
            >
                <Input
                    display="flex"
                    placeholder-color="LightGray"
                    background="white"
                    position="static"
                    top="20px"
                    width="600px"
                    left="0px"
                    placeholder="Введите поисковый запрос"
                    align-content="center"
                />
                <Button
                    border-color="--color-primary"
                    position="static"
                    top="-20px"
                    right="0px"
                    left="380px"
                    display="inline"
                    width="130px"
                >
                    Найти
                </Button>
            </Box>
            <Box
                min-width="100px"
                min-height="100px"
                quarkly-title="resultBox"
                align-items="center"
                justify-content="center"
                display="flex"
                flex="1 1 0%"
                align-self="stretch"
                flex-direction="row"
                align-content="center"
                font="--base"
                text-align="left"
            >
                <Box min-width="350px" min-height="100px" quarkly-title="Separator"/>
                <List
                    margin="0px 0px 0px 0px"
                    padding="0px 0px 0px 20px"
                    list-style-type="disc"
                    align-self="center"
                    flex="1 1 0%"
                    text-align="left"
                    display="flex"
                    flex-direction="column"
                    align-items="stretch"
                    justify-content="center"
                    color="--light"
                >
                    <Box
                        min-height="50px"
                        display="flex"
                        justify-content="center"
                        align-content="center"
                        align-items="stretch"
                        flex-direction="column"
                        quarkly-title="outerBox"
                    >
                        <Box min-width={0} quarkly-title="Separator" min-height="10px" flex="1 1 0%"/>
                        <Box
                            min-height="50px"
                            display="flex"
                            justify-content="center"
                            align-content="center"
                            align-items="stretch"
                            flex-direction="row"
                            quarkly-title="rowBox"
                            flex="1 1 0%"
                        >
                            <Icon
                                category="md"
                                icon={MdAccountBox}
                                size="64px"
                                color="--lightD2"
                                width="40px"
                                height="40px"
                            />
                            <Box min-width="10px" quarkly-title="Separator"/>
                            <Box
                                min-height="50px"
                                display="block"
                                justify-content="center"
                                align-content="center"
                                align-items="stretch"
                                flex-direction="row"
                                flex="1 1 0%"
                                quarkly-title="valueBox"
                            >
                                <Text
                                    margin="0px 0px 0px 0px"
                                    align-self="stretch"
                                    flex="1 1 0%"
                                    display="flex"
                                    flex-direction="row"
                                    quarkly-title="NameValue"
                                    text-transform="uppercase"
                                    color="--grey"
                                >
                                    First item
                                </Text>
                                <Text
                                    margin="0px 0px 0px 0px"
                                    align-self="stretch"
                                    flex="1 1 0%"
                                    display="flex"
                                    flex-direction="row"
                                    quarkly-title="QualificationsValue"
                                    color="--dark"
                                >
                                    First item
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        min-height="50px"
                        display="flex"
                        justify-content="center"
                        align-content="center"
                        align-items="stretch"
                        flex-direction="column"
                        quarkly-title="outerBox"
                    >
                        <Box min-width={0} quarkly-title="Separator" min-height="10px" flex="1 1 0%"/>
                        <Box
                            min-height="50px"
                            display="flex"
                            justify-content="center"
                            align-content="center"
                            align-items="stretch"
                            flex-direction="row"
                            quarkly-title="rowBox"
                            flex="1 1 0%"
                        >
                            <Icon
                                category="md"
                                icon={MdAccountBox}
                                size="64px"
                                color="--primary"
                                width="40px"
                                height="40px"
                            />
                            <Box min-width="10px" quarkly-title="Separator"/>
                            <Box
                                min-height="50px"
                                display="block"
                                justify-content="center"
                                align-content="center"
                                align-items="stretch"
                                flex-direction="row"
                                flex="1 1 0%"
                                quarkly-title="valueBox"
                            >
                                <Text
                                    margin="0px 0px 0px 0px"
                                    align-self="stretch"
                                    flex="1 1 0%"
                                    display="flex"
                                    flex-direction="row"
                                    quarkly-title="NameValue"
                                    text-transform="uppercase"
                                    color="--primary"
                                >
                                    First item
                                </Text>
                                <Text
                                    margin="0px 0px 0px 0px"
                                    align-self="stretch"
                                    flex="1 1 0%"
                                    display="flex"
                                    flex-direction="row"
                                    quarkly-title="QualificationsValue"
                                    color="--dark"
                                >
                                    First item
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        min-height="50px"
                        display="flex"
                        justify-content="center"
                        align-content="center"
                        align-items="stretch"
                        flex-direction="column"
                        quarkly-title="outerBox"
                    >
                        <Box min-width={0} quarkly-title="Separator" min-height="10px" flex="1 1 0%"/>
                        <Box
                            min-height="50px"
                            display="flex"
                            justify-content="center"
                            align-content="center"
                            align-items="stretch"
                            flex-direction="row"
                            quarkly-title="rowBox"
                            flex="1 1 0%"
                        >
                            <Icon
                                category="md"
                                icon={MdAccountBox}
                                size="64px"
                                color="--lightD2"
                                width="40px"
                                height="40px"
                            />
                            <Box min-width="10px" quarkly-title="Separator"/>
                            <Box
                                min-height="50px"
                                display="block"
                                justify-content="center"
                                align-content="center"
                                align-items="stretch"
                                flex-direction="row"
                                flex="1 1 0%"
                                quarkly-title="valueBox"
                            >
                                <Text
                                    margin="0px 0px 0px 0px"
                                    align-self="stretch"
                                    flex="1 1 0%"
                                    display="flex"
                                    flex-direction="row"
                                    quarkly-title="NameValue"
                                    text-transform="uppercase"
                                    color="--greyD2"
                                >
                                    First item
                                </Text>
                                <Text
                                    margin="0px 0px 0px 0px"
                                    align-self="stretch"
                                    flex="1 1 0%"
                                    display="flex"
                                    flex-direction="row"
                                    quarkly-title="QualificationsValue"
                                    color="--dark"
                                >
                                    First item
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </List>
                <Box min-width="30px" min-height="100px" quarkly-title="Separator"/>
                <Box
                    min-width="100px"
                    min-height="100px"
                    quarkly-title="Certificate"
                    font="--base"
                    flex="1 1 0%"
                >
                    <Box min-width="20px" min-height="20px" quarkly-title="SpaceBox" text-align="left"/>
                    <Text
                        margin="0px 0px 0px 0px"
                        quarkly-title="Name"
                        text-transform="uppercase"
                        text-align="left"
                        position="relative"
                        color="--greyD2"
                    >
                        Имя
                    </Text>
                    <Text margin="0px 0px 0px 0px" quarkly-title="NameValue" color="--dark" text-align="left">
                        Some text
                    </Text>
                    <Box min-width="10px" min-height="20px" quarkly-title="SpaceBox" text-align="left"/>
                    <Text
                        margin="0px 0px 0px 0px"
                        quarkly-title="Date"
                        text-transform="uppercase"
                        text-align="left"
                        position="relative"
                        color="--greyD2"
                    >
                        Дата Активации
                    </Text>
                    <Text margin="0px 0px 0px 0px" quarkly-title="DateValue" color="--dark" text-align="left">
                        Some text
                    </Text>
                    <Box min-width="10px" min-height="20px" quarkly-title="SpaceBox" text-align="left"/>
                    <Text
                        margin="0px 0px 0px 0px"
                        quarkly-title="Qualifications"
                        text-transform="uppercase"
                        text-align="left"
                        position="relative"
                        color="--greyD2"
                    >
                        Квалификации
                    </Text>
                    <Text margin="0px 0px 0px 0px" quarkly-title="QualificationsValue" color="--dark" text-align="left">
                        Some text
                    </Text>
                    <Box min-width="10px" min-height="20px" quarkly-title="SpaceBox" text-align="left"/>
                    <Text
                        margin="0px 0px 0px 0px"
                        quarkly-title="Contacts"
                        text-transform="uppercase"
                        text-align="left"
                        position="relative"
                        color="--greyD2"
                    >
                        Контакты
                    </Text>
                    <Text margin="0px 0px 0px 0px" quarkly-title="ContactsValue" color="--dark" text-align="left">
                        Some text
                    </Text>
                    <Box min-width="10px" min-height="20px" quarkly-title="SpaceBox" text-align="left"/>
                    <Text
                        margin="0px 0px 0px 0px"
                        quarkly-title="Note"
                        text-transform="uppercase"
                        text-align="left"
                        position="relative"
                        color="--greyD2"
                    >
                        Дополнительно
                        <br/>
                    </Text>
                    <Text margin="0px 0px 0px 0px" quarkly-title="NoteValue" color="--dark" text-align="left">
                        Some text
                    </Text>
                </Box>
                <Box min-width="350px" min-height="100px" quarkly-title="Separator"/>
            </Box>
        </Section>

        <Section
            box-sizing="border-box"
            quarkly-title="Footer"
            justify-content="center"
            margin="0 0 0 0"
            padding="16px 0 16px 0"
        >
            <Override
                slot="SectionContent"
                width="100%"
                margin="0px 32px 0px 32px"
                md-margin="0px 16px 0px 16px"
                min-width="auto"
            />

        </Section>

    </Theme>;
});
