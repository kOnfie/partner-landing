import { AttentionIcon, WarningTable, WarningTableBody, WarningTableContainer, WarningTableHeader, WarningTableText } from 'pages/Requisitespage/RequisitesStyles'
import SideMenu from 'pages/Sidemenu/SideMenu'
import attention from 'shared/assets/img/requisites/attention.png'
import Navbar from 'shared/ui/navbar/Navbar'
import { Header, HeaderExtraDiv, IndicatorItem, IndicatorItems, InputFieldSelect, MainIndicatorsTable, OverviewContainer, OverviewContent, OverviewHeader, UnderlineText } from './OverviewStyles'
import BannerOverview from './BannerOverview'
import Table from './Table'




const OverviewPage = () => {
  return (
    <div>
        <Navbar />
        <OverviewContainer>
            <SideMenu />
            <OverviewContent>
                <WarningTable>
                <WarningTableContainer>
                        <AttentionIcon src={attention} alt="" />
                        <WarningTableText>
                            <WarningTableHeader>Активація аккаунта</WarningTableHeader>
                            <WarningTableBody>Ваш обліковий запис готовий до роботи! Для виведення винагороди Вам необхідно заповнити реквізити та активувати обліковий запис.</WarningTableBody>
                        </WarningTableText>
                    </WarningTableContainer>
                </WarningTable>
                <OverviewHeader>
                    Перегляд статистики - Головне 
                    
                        <InputFieldSelect id="input2">
                            <option value="option1">Останні 30 днів</option>
                            <option value="option2">Останні 40 днів</option>
                            <option value="option3">Останні 50 днів</option>
                            <option value="option4">Останні 60 днів</option>
                        </InputFieldSelect>
                        
                </OverviewHeader>
                <HeaderExtraDiv>
                    <BannerOverview />
                        <MainIndicatorsTable>
                                <Header>
                                    Основні показники
                                </Header>
                                <IndicatorItems>
                                <IndicatorItem>
                                    <p>Загальна кількість продажів</p>
                                    <p>150 од</p>
                                </IndicatorItem>
                                <IndicatorItem>
                                    <p>Загальна об’єм продажів</p>
                                    <p>150 000 ₴</p>
                                </IndicatorItem>
                                <IndicatorItem>
                                    <p>Загальна об’єм продажів</p>
                                    <p>150 000 ₴</p>
                                </IndicatorItem>
                                <IndicatorItem>
                                    <p>Конверсія (РРС)</p>
                                    <p>10 %</p>
                                </IndicatorItem>
                                <IndicatorItem>
                                    <p>Середній чек</p>
                                    <p>1500 ₴</p>
                                </IndicatorItem>
                                <IndicatorItem>
                                    <p>Дані про трафік</p>
                                    <UnderlineText>Подробиці</UnderlineText>
                                </IndicatorItem>
                                </IndicatorItems>
                        </MainIndicatorsTable>
                </HeaderExtraDiv>
               
                <Table />
                        
            </OverviewContent>
        </OverviewContainer>
    </div>
  )
}

export default OverviewPage