import React, { useEffect, useState } from "react";
import {
  DesktopMoreInfo,
  MobileMoreInfo,
  MoreInfoSecion,
  MobileMoreInfoSection,
  MobileTabButton,
} from "../ProductDetail.Style";
import TabButton from "../../common/Button/TabButton"; // TabButton 컴포넌트를 import 합니다.
import MDEditor from "@uiw/react-md-editor";

interface Props {
  Productinfo: string;
}

type OpenTabsState = {
  [key: string]: boolean;
};

export default function MoreProductInfo({ Productinfo }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
  };

  const initialTabsState: OpenTabsState = {
    tab1: false,
    tab2: false,
    tab3: false,
    tab4: false,
  };

  const [openTabs, setOpenTabs] = useState<OpenTabsState>(initialTabsState);
  useEffect(() => {
    setOpenTabs({ tab1: true, tab2: false, tab3: false, tab4: false });
  }, []);

  const toggleHandler = (id: string) => {
    setOpenTabs({ ...initialTabsState, [id]: !openTabs[id] });
  };

  const tabLabels = ["상세보기", "리뷰", "Q & A", "반품/교환정보"];

  return (
    <>
      <>
        <DesktopMoreInfo>
          <TabButton
            value={activeTab}
            onChange={handleTabChange}
            labels={tabLabels}
          />

          {activeTab === 0 && (
            <MoreInfoSecion>
              {Productinfo === undefined ? (
                "여기에 상세 정보 내용을 넣으세요"
              ) : (
                <div className="markdownDiv" data-color-mode="light">
                  <MDEditor.Markdown
                    style={{ padding: 10 }}
                    source={Productinfo}
                  />
                </div>
              )}
            </MoreInfoSecion>
          )}

          {activeTab === 1 && (
            <MoreInfoSecion>여기에 리뷰 내용을 넣으세요.</MoreInfoSecion>
          )}

          {activeTab === 2 && (
            <MoreInfoSecion>여기에 Q/A 내용을 넣으세요.</MoreInfoSecion>
          )}

          {activeTab === 3 && (
            <MoreInfoSecion>
              여기에 반품/교환정보 내용을 넣으세요.
            </MoreInfoSecion>
          )}
        </DesktopMoreInfo>
      </>
      <>
        <MobileMoreInfo>
          <ul>
            <li>
              <MobileTabButton
                active={openTabs.tab1}
                onClick={() => toggleHandler("tab1")}
              >
                상세보기
              </MobileTabButton>
            </li>
            <li>
              <MobileMoreInfoSection isOpen={openTabs.tab1}>
                {Productinfo === undefined ? (
                  "여기에 상세 정보 내용을 넣으세요"
                ) : (
                  <div className="markdownDiv" data-color-mode="light">
                    <MDEditor.Markdown
                      style={{ padding: 10 }}
                      source={Productinfo}
                    />
                  </div>
                )}
              </MobileMoreInfoSection>
            </li>
            <li>
              <MobileTabButton
                active={openTabs.tab2}
                onClick={() => toggleHandler("tab2")}
              >
                리뷰
              </MobileTabButton>
            </li>
            <li>
              <MobileMoreInfoSection isOpen={openTabs.tab2}>
                여기에 리뷰 내용을 넣으세요.
              </MobileMoreInfoSection>
            </li>
            <li>
              <MobileTabButton
                active={openTabs.tab3}
                onClick={() => toggleHandler("tab3")}
              >
                Q & A
              </MobileTabButton>
            </li>
            <li>
              <MobileMoreInfoSection isOpen={openTabs.tab3}>
                여기에 Q/A 내용을 넣으세요.
              </MobileMoreInfoSection>
            </li>
            <li>
              <MobileTabButton
                active={openTabs.tab4}
                onClick={() => toggleHandler("tab4")}
              >
                반품/교환정보
              </MobileTabButton>
            </li>
            <li>
              <MobileMoreInfoSection isOpen={openTabs.tab4}>
                여기에 반품/교환정보 내용을 넣으세요.
              </MobileMoreInfoSection>
            </li>
          </ul>
        </MobileMoreInfo>
      </>
    </>
  );
}
