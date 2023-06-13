import React from "react";
import {Override} from "@quarkly/components";
import * as Components from "components";

export default function MainMenu(){
    return(
        <Components.BurgerMenu md-display="flex" md-align-items="center" md-justify-content="flex-end">

            <Override
                slot="menu"
                md-top={0}
                md-width="100%"
                justify-content="center"
                lg-transition="transform 400ms ease 0s"
                md-position="fixed"
                display="flex"
                md-left={0}
                lg-transform="translateY(0px) translateX(0px)"
                md-height="100%"
                padding="0px 0 0px 0"
                align-items="center"
            >

                <Override slot="item-certificate" lg-display="none" display="block"/>

                <Override
                    slot="link"
                    md-hover-opacity="1"
                    md-active-opacity="1"
                    md-color="--dark"
                    font="--base"
                    text-transform="initial"
                    md-font="16px/24px sans-serif"
                    text-decoration-line="initial"
                    color="--dark"
                    transition="opacity .15s ease 0s"
                    letter-spacing="0.5px"
                    md-opacity=".5"
                    md-transition="opacity .15s ease 0s"
                    opacity=".5"
                    hover-opacity="1"
                />
                <Override
                    slot="link-active"
                    md-opacity="1"
                    md-cursor="default"
                    opacity="1"
                    color="--primary"
                    cursor="default"
                />

            </Override>
        </Components.BurgerMenu>
    )
}
