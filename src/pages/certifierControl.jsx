import React, {useState} from "react";
import theme from "theme";
import {Box, Button, Input, Link, Section, Text, Theme} from "@quarkly/widgets";
import {Helmet} from "react-helmet";
import {GlobalPageStyles} from "global-page-styles";
import {Override} from "@quarkly/components";
import moment from 'moment';
import MainMenu from "./parts";
import {createCertificateApiMethod} from "../lib/api/certifier";
import i from "styled-components/macro";

export default (() => {
    return <Theme theme={theme}>
        <GlobalPageStyles pageUrl={"certifier"}/>
        <Helmet>
            <title>
                Certifier | Certsystem
            </title>
            <meta name={"description"} content={""}/>
            <meta property={"og:title"} content={"Certifier | CertSystem"}/>
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
                min-width="100%"
                margin="0px 32px 0px 32px"
                align-items="center"
                lg-height="520px"
                md-height="420px"
                md-padding="0px 24px 0px 24px"
                display="flex"
                position="relative"
                flex="1 1 0%"
                max-width="100%"
                align-self="stretch"
            />

            <EditBox/>
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

            </Box>
        </Section>
    </Theme>;
});

function EditBox(){
    const currentDate = moment().format('DD.MM.YYYY');

    const [ownerName, setOwnerName] = useState('');
    const [qualifications, setQualifications] = useState('');
    const [contacts, setContacts] = useState('');
    const [note, setNote] = useState('');
    const [ipfsHash, setIpfsHash] = useState('');
    const [password, setPassword] = useState('');

    const handleOwnerName = (event) => {
        setOwnerName(event.target.value);
    };
    const handleQualifications = (event) => {
        setQualifications(event.target.value);
    };
    const handleContacts = (event) => {
        setContacts(event.target.value);
    };
    const handleNote = (event) => {
        setNote(event.target.value);
    };
    const handleIpfsHash = (event) => {
        setIpfsHash(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSaveButtonClick = () => {
        createCertificateApiMethod(
            ownerName,
            contacts,
            note,
            qualifications,
            ipfsHash,
            password
        );
    };
    return (
        <Box
            min-width="100px"
            min-height="100px"
            quarkly-title="editBox"
            align-self="stretch"
            justify-content="center"
            align-items="center"
            align-content="center"
            display="flex"
            flex="0 0 auto"
        >
            <Box
                min-width="100px"
                min-height="100px"
                quarkly-title="CertificateBox"
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
                <Box
                    min-width="20px"
                    min-height="20px"
                    quarkly-title="valueBox"
                    display="flex"
                    justify-content="flex-end"
                >
                    <Input
                        display="flex"
                        placeholder-color="LightGray"
                        background="white"
                        text-align="left"
                        justify-content="center"
                        align-items="center"
                        align-content="center"
                        width="500px"
                        position="static"
                        flex-direction="row"
                        placeholder="Введите имя сертифицируемого"
                        value={ownerName}
                        onChange={handleOwnerName}
                    />
                </Box>
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
                <Box
                    min-width="20px"
                    min-height="20px"
                    quarkly-title="valueBox"
                    display="flex"
                    justify-content="flex-end"
                >
                    <Input
                        display="flex"
                        placeholder-color="LightGray"
                        background="white"
                        text-align="left"
                        justify-content="center"
                        align-items="center"
                        align-content="center"
                        width="500px"
                        position="static"
                        flex-direction="row"
                        placeholder="Введите подтверждаемые квалификации"
                        value={qualifications}
                        onChange={handleQualifications}
                    />
                </Box>
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
                <Box
                    min-width="20px"
                    min-height="20px"
                    quarkly-title="valueBox"
                    display="flex"
                    justify-content="flex-end"
                >
                    <Input
                        display="flex"
                        placeholder-color="LightGray"
                        background="white"
                        text-align="left"
                        justify-content="center"
                        align-items="center"
                        align-content="center"
                        width="500px"
                        position="static"
                        flex-direction="row"
                        placeholder="Введите контакты сертифицируемого"
                        value={contacts}
                        onChange={handleContacts}
                    />
                </Box>
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
                <Box
                    min-width="20px"
                    min-height="20px"
                    quarkly-title="valueBox"
                    display="flex"
                    justify-content="flex-end"
                >
                    <Input
                        display="flex"
                        placeholder-color="LightGray"
                        background="white"
                        text-align="left"
                        justify-content="center"
                        align-items="center"
                        align-content="center"
                        width="500px"
                        position="static"
                        flex-direction="row"
                        placeholder="Введите дополнительную информацию о сертификате"
                        value={note}
                        onChange={handleNote}
                    />
                </Box>
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
                    {currentDate}
                </Text>
            </Box>
            <Box min-width="30px" min-height="100px" quarkly-title="Separator"/>

            {/*AUTH*/}
            <Box min-width="100px" min-height="100px" quarkly-title="AuthBox" flex="1 1 0%">
                <Box min-width="20px" min-height="20px" quarkly-title="SpaceBox"/>
                <Text
                    margin="0px 0px 0px 0px"
                    quarkly-title="EthLogin"
                    text-transform="uppercase"
                    text-align="left"
                    position="relative"
                    font="normal 400 16px/1.5 --fontFamily-sans"
                    color="--greyD2"
                >
                    Логин
                </Text>
                <Box
                    min-width="20px"
                    min-height="20px"
                    quarkly-title="valueBox"
                    display="flex"
                    justify-content="flex-start"
                >
                    <Input
                        display="flex"
                        placeholder-color="LightGray"
                        background="white"
                        text-align="left"
                        justify-content="center"
                        align-items="center"
                        align-content="center"
                        width="500px"
                        position="static"
                        flex-direction="row"
                        placeholder="Введите ваш IPFS hash"
                        value={ipfsHash}
                        onChange={handleIpfsHash}
                    />
                </Box>
                <Box min-width="10px" min-height="20px" quarkly-title="SpaceBox" font="--base"/>
                <Text
                    margin="0px 0px 0px 0px"
                    quarkly-title="EthPassword"
                    text-transform="uppercase"
                    text-align="left"
                    position="relative"
                    font="normal 400 16px/1.5 --fontFamily-sans"
                    color="--greyD2"
                >
                    Пароль
                </Text>
                <Box
                    min-width="20px"
                    min-height="20px"
                    quarkly-title="valueBox"
                    display="flex"
                    justify-content="flex-start"
                >
                    <Input
                        display="flex"
                        placeholder-color="LightGray"
                        background="white"
                        text-align="left"
                        justify-content="center"
                        align-items="center"
                        align-content="center"
                        width="500px"
                        position="static"
                        flex-direction="row"
                        placeholder="Введите пароль вашего ethereum-аккаунта"
                        type="password"
                        value={password}
                        onChange={handlePassword}
                    />
                </Box>
                <Box min-width="10px" min-height="20px" quarkly-title="SpaceBox" font="--base"/>
                <Box
                    min-width="20px"
                    min-height="20px"
                    quarkly-title="valueBox"
                    display="flex"
                    justify-content="flex-start"
                >
                    <Button
                        quarkly-title="SaveButton"
                        onClick={handleSaveButtonClick}
                    >
                        Сохранить
                    </Button>
                    <Box
                        min-width="20px"
                        min-height="20px"
                        quarkly-title="spaceBox"
                        display="flex"
                        justify-content="flex-start"
                    />
                    <Button background="--color-grey" quarkly-title="ClearButton">
                        Сброс
                    </Button>
                </Box>
                <Box min-width="10px" min-height="65px" quarkly-title="SpaceBox" font="--base"/>
            </Box>
            {/*AUTH_END*/}
        </Box>
    )
}

function ResultBox(){
    return(
        <Box
            min-width="100px"
            min-height="100px"
            quarkly-title="resultBox"
            align-self="stretch"
            justify-content="center"
            align-items="center"
            align-content="center"
            flex-direction="column"
        >
            <Box
                min-width="100px"
                min-height="100px"
                quarkly-title="AuthorityR"
                flex="1 1 0%"
                align-self="stretch"
                display="flex"
                flex-direction="column"
                align-items="center"
                justify-content="center"
            >
                <Box min-width="20px" min-height="50px" quarkly-title="SpaceBox"/>
                <Text
                    margin="0px 0px 0px 0px"
                    quarkly-title="Ipfs"
                    text-transform="uppercase"
                    text-align="left"
                    position="relative"
                    font="normal 400 16px/1.5 --fontFamily-sans"
                    color="--greyD2"
                >
                    Сертификат сохранен
                </Text>
                <Box min-width="10px" min-height="20px" quarkly-title="SpaceBox" font="--base"/>
                <Text
                    margin="0px 0px 0px 0px"
                    quarkly-title="IphsValue"
                    text-align="left"
                    position="relative"
                    font="--headline3"
                    color="--secondary"
                >
                    QmQSrJjoisCWkvtwsBsAi56r9DhZnnV8srDiWRQtr2L2yJ
                </Text>
                <Box min-width="10px" min-height="20px" quarkly-title="SpaceBox" font="--base"/>
                <Button quarkly-title="CopyButton" background="--color-grey">
                    Скопировать код
                </Button>
            </Box>
        </Box>
    )
}