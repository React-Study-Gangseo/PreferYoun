import React, { useEffect, useState } from "react";
import {
  DesktopMoreInfo,
  MobileMoreInfo,
  MoreInfoSecion,
  MobileMoreInfoSection,
} from "../ProductDetail.Style";
import Button from "component/common/Button/Button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
interface Props {
  Productinfo: string;
}
type OpenTabsState = {
  [key: string]: boolean;
};
export default function MoreProductInfo({ Productinfo }: Props) {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
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
  return (
    <>
      <>
        <DesktopMoreInfo>
          <ul>
            <li>
              <Button
                width="tab"
                color="black"
                bgColor={activeTab === "tab1" ? "tabActive" : undefined}
                onClick={() => handleTabClick("tab1")}
              >
                상세보기
              </Button>
            </li>
            <li>
              <Button
                width="tab"
                color="black"
                bgColor={activeTab === "tab2" ? "tabActive" : undefined}
                onClick={() => handleTabClick("tab2")}
              >
                리뷰
              </Button>
            </li>
            <li>
              <Button
                width="tab"
                color="black"
                bgColor={activeTab === "tab3" ? "tabActive" : undefined}
                onClick={() => handleTabClick("tab3")}
              >
                Q & A
              </Button>
            </li>
            <li>
              <Button
                width="tab"
                color="black"
                bgColor={activeTab === "tab4" ? "tabActive" : undefined}
                onClick={() => handleTabClick("tab4")}
              >
                반품/교환정보
              </Button>
            </li>
          </ul>

          {activeTab === "tab1" && (
            <MoreInfoSecion>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {Productinfo === undefined
                  ? "여기에 상세 정보 내용을 넣으세요"
                  : Productinfo}
              </ReactMarkdown>
            </MoreInfoSecion>
          )}

          {activeTab === "tab2" && (
            <MoreInfoSecion>여기에 리뷰 내용을 넣으세요.</MoreInfoSecion>
          )}

          {activeTab === "tab3" && (
            <MoreInfoSecion>여기에 Q/A 내용을 넣으세요.</MoreInfoSecion>
          )}

          {activeTab === "tab4" && (
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
              <Button
                width="tab"
                color="black"
                bgColor={openTabs.tab1 ? "tabActive" : undefined}
                onClick={() => toggleHandler("tab1")}
              >
                상세보기
              </Button>
            </li>
            <li>
              <MobileMoreInfoSection isOpen={openTabs.tab1}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {Productinfo === undefined
                    ? "여기에 상세 정보 내용을 넣으세요"
                    : Productinfo}
                </ReactMarkdown>
              </MobileMoreInfoSection>
            </li>
            <li>
              <Button
                width="tab"
                color="black"
                bgColor={openTabs.tab2 ? "tabActive" : undefined}
                onClick={() => toggleHandler("tab2")}
              >
                리뷰
              </Button>
            </li>
            <li>
              <MobileMoreInfoSection isOpen={openTabs.tab2}>
                여기에 리뷰 내용을 넣으세요.
              </MobileMoreInfoSection>
            </li>
            <li>
              <Button
                width="tab"
                color="black"
                bgColor={openTabs.tab3 ? "tabActive" : undefined}
                onClick={() => toggleHandler("tab3")}
              >
                Q & A
              </Button>
            </li>
            <li>
              <MobileMoreInfoSection isOpen={openTabs.tab3}>
                여기에 Q/A 내용을 넣으세요.
              </MobileMoreInfoSection>
            </li>
            <li>
              <Button
                width="tab"
                color="black"
                bgColor={openTabs.tab4 ? "tabActive" : undefined}
                onClick={() => toggleHandler("tab4")}
              >
                반품/교환정보
              </Button>
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
