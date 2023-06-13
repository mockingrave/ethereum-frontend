import React, {useState} from 'react';
import theme from "theme";
import {Box, Button, Input, Link, Section, Text, Theme} from "@quarkly/widgets";
import {Helmet} from "react-helmet";
import {GlobalPageStyles} from "global-page-styles";
import {Override} from "@quarkly/components";
import {getCertificateApiMethod} from "../lib/api/certifier";
import MainMenu from "./parts";


export default (() => {
    return <Theme theme={theme}>
        <GlobalPageStyles pageUrl={"certificate"}/>
        <Helmet>
            <title>
                Certsystem
            </title>
            <meta name={"description"} content={""}/>
            <meta property={"og:title"} content={"Home | CertSystem"}/>
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
                font="--base"
                color="#000000"
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
        >
            <Override
                slot="SectionContent"
                md-margin="0px 16px 0px 16px"
                width="100%"
                background="linear-gradient(180deg,rgba(108, 252, 247, 0.15) 0%,transparent 100%) 0 0 no-repeat"
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
                flex="0 0 auto"
                max-width="100%"
            />

            <TextBox/>
            <InputBox/>
            {/*<ResultBox/>*/}

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
                md-margin="0px 16px 0px 16px"
                min-width="auto"
                margin="0px 32px 0px 32px"
            />
            <Box
                grid-gap="32px"
                width="100%"
                grid-template-columns="repeat(2, 1fr)"
                sm-grid-gap="16px"
                display="none"
            >

            </Box>
        </Section>
    </Theme>;
});

function TextBox() {
    return (
        <Box
            min-width="100px"
            min-height="100px"
            quarkly-title="textBox"
            display="flex"
            justify-content="center"
            align-content="center"
            align-items="center"
            flex-direction="column"
            flex="0 0 auto"
            align-self="stretch"
            text-align="center"
        >
            <Text
                font="--headline3"
                margin="16px 0px 0px 0px"
                sm-text-align="center"
                sm-width="80%"
                lg-text-align="center"
                lg-font="--headline2"
                color="--darkL2"
                display="flex"
                align-items="center"
                justify-content="center"
            >
                Проверка подлинности сертификата
            </Text>
        </Box>
    );
}

function InputBox() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        getCertificateApiMethod(inputValue);
    };

    return (
        <Box
            min-width="100px"
            min-height="100px"
            quarkly-title="inputBox"
            align-self="stretch"
            display="flex"
            justify-content="center"
            align-items="center"
        >
            <Input
                display="block"
                placeholder-color="LightGray"
                background="white"
                position="static"
                top="20px"
                width="600px"
                left="0px"
                placeholder="Введите код сертификата или компании"
                value={inputValue}
                onChange={handleInputChange}
            />
            <Button
                border-color="--color-primary"
                position="static"
                top="-20px"
                right="0px"
                left="380px"
                width="130px"
                onClick={handleButtonClick}
            >
                Поиск
            </Button>
        </Box>
    );
}

function ResultBox() {
    return (
        <Box
            min-width="100px"
            min-height="100px"
            quarkly-title="resultBox"
            align-self="stretch"
            justify-content="center"
            align-items="center"
            align-content="center"
            display="flex"

        >
            <Box
                min-width="100px"
                min-height="100px"
                quarkly-title="Certificate"
                font="--base"
                flex="1 1 0%"
            >
                <Box min-width="20px" min-height="20px" quarkly-title="SpaceBox"/>
                <Text
                    margin="0px 0px 0px 0px"
                    quarkly-title="Name"
                    text-transform="uppercase"
                    text-align="right"
                    position="relative"
                    color="--greyD2"
                >
                    Имя
                </Text>
                <Text margin="0px 0px 0px 0px" quarkly-title="NameValue" color="--dark" text-align="right">
                    Some text
                </Text>
                <Box min-width="10px" min-height="20px" quarkly-title="SpaceBox" text-align="right"/>
                <Text
                    margin="0px 0px 0px 0px"
                    quarkly-title="Date"
                    text-transform="uppercase"
                    text-align="right"
                    position="relative"
                    color="--greyD2"
                >
                    Дата Активации
                </Text>
                <Text margin="0px 0px 0px 0px" quarkly-title="DateValue" color="--dark" text-align="right">
                    Some text
                </Text>
                <Box min-width="10px" min-height="20px" quarkly-title="SpaceBox" text-align="right"/>
                <Text
                    margin="0px 0px 0px 0px"
                    quarkly-title="Qualifications"
                    text-transform="uppercase"
                    text-align="right"
                    position="relative"
                    color="--greyD2"
                >
                    Квалификации
                </Text>
                <Text margin="0px 0px 0px 0px" quarkly-title="QualificationsValue" color="--dark"
                      text-align="right">
                    Some text
                </Text>
                <Box min-width="10px" min-height="20px" quarkly-title="SpaceBox" text-align="right"/>
                <Text
                    margin="0px 0px 0px 0px"
                    quarkly-title="Contacts"
                    text-transform="uppercase"
                    text-align="right"
                    position="relative"
                    color="--greyD2"
                >
                    Контакты
                </Text>
                <Text margin="0px 0px 0px 0px" quarkly-title="ContactsValue" color="--dark" text-align="right">
                    Some text
                </Text>
                <Box min-width="10px" min-height="20px" quarkly-title="SpaceBox" text-align="right"/>
                <Text
                    margin="0px 0px 0px 0px"
                    quarkly-title="Note"
                    text-transform="uppercase"
                    text-align="right"
                    position="relative"
                    color="--greyD2"
                >
                    Дополнительно
                    <br/>
                </Text>
                <Text margin="0px 0px 0px 0px" quarkly-title="NoteValue" color="--dark" text-align="right">
                    Some text
                </Text>
            </Box>
            <Box
                min-width="100px"
                min-height="100px"
                quarkly-title="AuthorityL"
                flex="1 1 0%"
                display="none"
            >
                <Box min-width="20px" min-height="20px" quarkly-title="SpaceBox" text-align="right"/>
                <Text
                    margin="0px 0px 0px 0px"
                    quarkly-title="Name"
                    text-transform="uppercase"
                    text-align="right"
                    position="relative"
                    font="normal 400 16px/1.5 --fontFamily-sans"
                    color="--greyD2"
                >
                    Компания
                </Text>
                <Text margin="0px 0px 0px 0px" quarkly-title="NameValue" font="--base" text-align="right">
                    Some text
                </Text>
                <Box
                    min-width="10px"
                    min-height="20px"
                    quarkly-title="SpaceBox"
                    font="--base"
                    text-align="right"
                />
                <Text
                    margin="0px 0px 0px 0px"
                    quarkly-title="Department"
                    text-transform="uppercase"
                    text-align="right"
                    position="relative"
                    font="normal 400 16px/1.5 --fontFamily-sans"
                    color="--greyD2"
                >
                    Подразделение
                </Text>
                <Text margin="0px 0px 0px 0px" quarkly-title="DepartmentName" font="--base" text-align="right">
                    Some text
                </Text>
                <Box
                    min-width="10px"
                    min-height="20px"
                    quarkly-title="SpaceBox"
                    font="--base"
                    text-align="right"
                />
                <Text
                    margin="0px 0px 0px 0px"
                    quarkly-title="Date"
                    text-transform="uppercase"
                    text-align="right"
                    position="relative"
                    font="normal 400 16px/1.5 --fontFamily-sans"
                    color="--greyD2"
                >
                    Дата Активации
                </Text>
                <Text margin="0px 0px 0px 0px" quarkly-title="DateValue" font="--base" text-align="right">
                    Some text
                </Text>
                <Box
                    min-width="10px"
                    min-height="20px"
                    quarkly-title="SpaceBox"
                    font="--base"
                    text-align="right"
                />
                <Text
                    margin="0px 0px 0px 0px"
                    quarkly-title="Contacts"
                    text-transform="uppercase"
                    text-align="right"
                    position="relative"
                    font="normal 400 16px/1.5 --fontFamily-sans"
                    color="--greyD2"
                >
                    Контакты
                </Text>
                <Text margin="0px 0px 0px 0px" quarkly-title="ContactsValue" font="--base" text-align="right">
                    Some text
                </Text>
                <Box
                    min-width="10px"
                    min-height="20px"
                    quarkly-title="SpaceBox"
                    font="--base"
                    text-align="right"
                />
                <Text
                    margin="0px 0px 0px 0px"
                    quarkly-title="SourceName"
                    text-transform="uppercase"
                    text-align="right"
                    position="relative"
                    font="normal 400 16px/1.5 --fontFamily-sans"
                    color="--greyD2"
                >
                    Источник полномочий
                </Text>
                <Text margin="0px 0px 0px 0px" quarkly-title="SourceNameValue" font="--base" text-align="right">
                    Some text
                </Text>
                <Box
                    min-width="10px"
                    min-height="20px"
                    quarkly-title="SpaceBox"
                    font="--base"
                    text-align="right"
                />
                <Text
                    margin="0px 0px 0px 0px"
                    quarkly-title="SourceIpfs"
                    text-transform="uppercase"
                    text-align="right"
                    position="relative"
                    font="normal 400 16px/1.5 --fontFamily-sans"
                    color="--greyD2"
                >
                    Код источника полномочий
                </Text>
                <Text margin="0px 0px 0px 0px" quarkly-title="SourceIpfsValue" font="--base" text-align="right">
                    Some text
                </Text>
            </Box>
            <Box min-width="30px" min-height="100px" quarkly-title="Separator"/>
            <Box min-width="100px" min-height="100px" quarkly-title="AuthorityR" flex="1 1 0%">
                <Box min-width="20px" min-height="20px" quarkly-title="SpaceBox"/>
                <Text
                    margin="0px 0px 0px 0px"
                    quarkly-title="Name"
                    text-transform="uppercase"
                    text-align="left"
                    position="relative"
                    font="normal 400 16px/1.5 --fontFamily-sans"
                    color="--greyD2"
                >
                    Компания
                </Text>
                <Text margin="0px 0px 0px 0px" quarkly-title="NameValue" font="--base">
                    Some text
                </Text>
                <Box min-width="10px" min-height="20px" quarkly-title="SpaceBox" font="--base"/>
                <Text
                    margin="0px 0px 0px 0px"
                    quarkly-title="Department"
                    text-transform="uppercase"
                    text-align="left"
                    position="relative"
                    font="normal 400 16px/1.5 --fontFamily-sans"
                    color="--greyD2"
                >
                    Подразделение
                </Text>
                <Text margin="0px 0px 0px 0px" quarkly-title="DepartmentName" font="--base">
                    Some text
                </Text>
                <Box min-width="10px" min-height="20px" quarkly-title="SpaceBox" font="--base"/>
                <Text
                    margin="0px 0px 0px 0px"
                    quarkly-title="Date"
                    text-transform="uppercase"
                    text-align="left"
                    position="relative"
                    font="normal 400 16px/1.5 --fontFamily-sans"
                    color="--greyD2"
                >
                    Дата Активации
                </Text>
                <Text margin="0px 0px 0px 0px" quarkly-title="DateValue" font="--base">
                    Some text
                </Text>
                <Box min-width="10px" min-height="20px" quarkly-title="SpaceBox" font="--base"/>
                <Text
                    margin="0px 0px 0px 0px"
                    quarkly-title="Contacts"
                    text-transform="uppercase"
                    text-align="left"
                    position="relative"
                    font="normal 400 16px/1.5 --fontFamily-sans"
                    color="--greyD2"
                >
                    Контакты
                </Text>
                <Text margin="0px 0px 0px 0px" quarkly-title="ContactsValue" font="--base">
                    Some text
                </Text>
                <Box min-width="10px" min-height="20px" quarkly-title="SpaceBox" font="--base"/>
                <Text
                    margin="0px 0px 0px 0px"
                    quarkly-title="SourceName"
                    text-transform="uppercase"
                    text-align="left"
                    position="relative"
                    font="normal 400 16px/1.5 --fontFamily-sans"
                    color="--greyD2"
                >
                    Источник полномочий
                </Text>
                <Text margin="0px 0px 0px 0px" quarkly-title="SourceNameValue" font="--base">
                    Some text
                </Text>
                <Box min-width="10px" min-height="20px" quarkly-title="SpaceBox" font="--base"/>
                <Text
                    margin="0px 0px 0px 0px"
                    quarkly-title="SourceIpfs"
                    text-transform="uppercase"
                    text-align="left"
                    position="relative"
                    font="normal 400 16px/1.5 --fontFamily-sans"
                    color="--greyD2"
                >
                    Код источника полномочий
                </Text>
                <Text margin="0px 0px 0px 0px" quarkly-title="SourceIpfsValue" font="--base">
                    Some text
                </Text>
            </Box>
        </Box>);
}
