import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "certificate": {},
    "search": {},
    "certifier": {},
    "accreditor": {},
    "accreditorCertifier": {},
    "error404": {}
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
