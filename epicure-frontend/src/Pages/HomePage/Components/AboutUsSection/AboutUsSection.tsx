import React from 'react'
import { AboutUsContainer, AboutUsInfo, AboutUsSectionContainer, AboutUsText, AppleStoreIcon, BottomText, DownloadButton, DownloadButtonContainer, DownloadTextApple, DownloadTextGoogle, GoogleIcon, LogoIcon, TopText, WrapperAboutUsSection } from './Styles'

export default function AboutUsSection() {
  return (
    <WrapperAboutUsSection>
      <LogoIcon src='/Images/HomePage/Logo.svg' alt='logo' />
      <AboutUsSectionContainer>
        <DownloadButtonContainer>
          <DownloadButton>
            <GoogleIcon src='/Images/HomePage/GooglePlay.svg' />
            <DownloadTextGoogle>
              <TopText>Get it on</TopText>
              <BottomText>Google Play</BottomText>
            </DownloadTextGoogle>
          </DownloadButton>
          <DownloadButton>
            <AppleStoreIcon src='Images/HomePage/Apple.svg' alt='apple' />
            <DownloadTextApple>
              <TopText>Download on the</TopText>
              <BottomText>App Store</BottomText>
            </DownloadTextApple>
          </DownloadButton>
        </DownloadButtonContainer>
        <AboutUsContainer>
          <AboutUsText>about us:</AboutUsText>
          <AboutUsInfo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non
            eu ipsum. Cras porta malesuada eros, eget blandit
            turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna,
            dignissim a vestibulum.</AboutUsInfo>
          <AboutUsInfo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
            eu ipsum. Cras porta malesuada eros.
          </AboutUsInfo>
        </AboutUsContainer>
      </AboutUsSectionContainer>
    </WrapperAboutUsSection>
  )
}
