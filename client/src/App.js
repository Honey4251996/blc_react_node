import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';

function App() {

  // const testAPI = 'http://localhost:9000/api';
  const blcAPIURL = 'http://localhost:9000/api/blc';

  // var [result, setResult] = useState(["|----broken link---- /digital/resources/privacy-security/security/system-requirements","|----broken link---- /digital/resources/privacy-security/security/system-requirements","|----broken link---- https://www.youtube.com/chase","|----broken link---- https://creditcards.chase.com/creditjourney?CELL=68GP","|----broken link---- https://www.chase.com/savings","|----broken link---- https://www.chase.com/commercial-bank","|----broken link---- https://www.chase.com/digital/resources/sitemap","|----broken link---- https://www.chase.com/meeting-scheduler/getstarted","|----broken link---- https://www.chase.com/resources/about-chase","|----broken link---- https://www.chase.com/personal/mortgage/loan-originator-search","|----broken link---- https://www.chase.com/personal/mortgage/fair-lending/fair-lending-overview","|----broken link---- https://www.chase.com/digital/resources/sitemap","|----broken link---- https://www.chase.com/personal/debit-reloadable-cards/starbucks","|----broken link---- https://www.chase.com/personal/credit-cards/education/rewards-benefits/what-are-travel-rewards-cards","|----broken link---- https://creditcards.chase.com/free-credit-score","|----broken link---- /personal/mortgage/jumbo-mortgage","|----broken link---- /personal/mortgage/mortgage-rates","|----broken link---- /personal/home-equity/home-equity-line-of-credit-calculator","|----broken link---- /personal/home-equity/about-home-equity/check-eligibility","|----broken link---- https://www.chase.com/personal/auto-loans/phoenix?offercode=WDPAXXXX07","|----broken link---- https://www.chase.com/personal/investments/advisor","|----broken link---- https://www.chase.com/digital/resources/complaints-feedback","|----broken link---- https://www.chase.com/digital/us-open.html","|----broken link---- https://www.chase.com/digital/online-banking","|----broken link---- https://www.chase.com/personal/branch-disclosures","|----broken link---- https://www.chase.com/digital/resources/accessibility","|----broken link---- https://www.chase.com/digital/resources/sitemap","|----broken link---- https://www.youtube.com/chase","|----broken link---- /es/digital/resources/privacy-security/security/system-requirements","|----broken link---- /es/digital/resources/privacy-security/security/system-requirements","|----broken link---- https://creditcards.chase.com/creditjourney?CELL=68GP","|----broken link---- https://www.chase.com/commercial-bank","|----broken link---- https://www.chase.com/es/digital/resources/sitemap","|----broken link---- https://www.chase.com/meeting-scheduler/getstarted","|----broken link---- https://www.chase.com/es/digital/resources/about-chase","|----broken link---- https://www.chase.com/personal/mortgage/loan-originator-search","|----broken link---- https://www.chase.com/personal/mortgage/fair-lending/fair-lending-overview","|----broken link---- https://www.chase.com/es/digital/resources/sitemap","|----broken link---- https://www.chase.com/personal/debit-reloadable-cards/starbucks","|----broken link---- https://www.chase.com/personal/credit-cards/education/rewards-benefits/what-are-travel-rewards-cards","|----broken link---- https://creditcards.chase.com/free-credit-score","|----broken link---- /personal/mortgage/jumbo-mortgage","|----broken link---- https://www.chase.com/es/personal/mortgage/mortgage-refinance","|----broken link---- https://www.chase.com/personal/mortgage/mortgage-rates","|----broken link---- /personal/home-equity/home-equity-line-of-credit-calculator","|----broken link---- /personal/home-equity/about-home-equity/check-eligibility","|----broken link---- https://www.chase.com/personal/auto-loans/phoenix?offercode=WDPAXXXX07","|----broken link---- https://www.chase.com/personal/investments/advisor","|----broken link---- /es/digital/resources/complaints-feedback","|----broken link---- https://www.chase.com/digital/us-open.html","|----broken link---- https://www.chase.com/es/digital/online-banking","|----broken link---- /es/personal/branch-disclosures","|----broken link---- https://www.chase.com/es/digital/resources/accessibility","|----broken link---- https://www.chase.com/es/digital/resources/sitemap","|----broken link---- /online/canada/canada-home-fr.htm","|----broken link---- /online/canada/customer-service-en.htm","|----broken link---- /online/canada/account-management-en.htm","|----broken link---- /online/canada/payment-options-en.htm","|----broken link---- /online/canada/customer-service-en.htm","|----broken link---- /online/canada/terms-en.htm","|----broken link---- /online/canada/privacy-en.htm","|----broken link---- /online/canada/security-en.htm","|----broken link---- https://www.chase.com/checking/chase-coupon","|----broken link---- https://www.chase.com/digital/disclosures-and-interest-rates","|----broken link---- https://www.chase.com/digital/resources/accessibility","|----broken link---- https://www.chase.com/checking","|----broken link---- https://www.chase.com/digital/mobile-deposits","|----broken link---- https://www.chase.com/digital/direct-deposit","|----broken link---- https://www.chase.com/checking/checkbook-orders","|----broken link---- https://www.chase.com/personal/checking/student-checking","|----broken link---- https://www.chase.com/personal/checking/student-checking","|----broken link---- https://www.chase.com/digital/resources/customer-service","|----broken link---- https://www.chase.com/digital/resources/complaints-feedback","|----broken link---- https://www.chase.com/personal/branch-disclosures","|----broken link---- https://www.chase.com/digital/resources/accessibility","|----broken link---- https://www.chase.com/checking","|----broken link---- https://www.chase.com/QuickDeposit","|----broken link---- https://www.chase.com/personal/checking/chase-checking-coupon","|----broken link---- https://www.chase.com/digital/direct-deposit","|----broken link---- https://www.chase.com/checking/checkbook-orders","|----broken link---- https://www.chase.com/personal/checking/student-checking","|----broken link---- https://www.chase.com/personal/checking/student-checking","|----broken link---- https://www.chase.com/digital/resources/customer-service","|----broken link---- https://www.chase.com/digital/resources/complaints-feedback","|----broken link---- https://www.chase.com/personal/branch-disclosures"]);
  var [result, setResult] =  useState([]);
  const [url, setUrl] = useState("");
  const [type, setType] = useState("1");
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true)
    if (url) {

      // axios.get(testAPI)
      //   .then(res => {
      //     // setLoading(!loading);
      //     console.log('Test API result>> ', res)
      //   })

      setLoading(true);
      axios.post(blcAPIURL, { url, type })
        .then(res => {
          let tempResult = res.data.result;
          // console.log('server response>>>', tempResult)
          setSubmit(false)
          setLoading(false);
          setResult(tempResult);
          // console.log('API result>>>', result)
        });
    }
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>Broken Link Checker</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>

            <Form.Group>
              <Form.Control type="text" placeholder="Enter URL" value={url} onChange={e => setUrl(e.target.value)} />
              {submit && !url &&
                <div className="help-block">Please provide URL</div>
              }
            </Form.Group>

            <Form.Group>
              <Form.Check
                type="radio"
                name="type"
                value="1"
                checked={type === "1"}
                onChange={(e) => setType(e.target.value)}
                label="whole website"
                inline
              />

              <Form.Check
                type="radio"
                name="type"
                value="2"
                checked={type === "2"}
                onChange={(e) => setType(e.target.value)}
                label="single webpage"
                inline
              />

              {loading ? (<Button variant="warning" disabled>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                &nbsp;Checking
              </Button>) :
                (
                  <Button variant="warning" type="button" onClick={(e) => handleSubmit(e)}>
                    Check
                  </Button>
                )
              }

            </Form.Group>

          </Form>
        </Col>
      </Row>
      {result.length ?
        (<Row>
          <Col className="output">
            {result.map((item, index) => {
              return <div key={index}>{item}<br /></div>
            })}
          </Col>
        </Row>)
        : (<></>)
      }

    </Container >
  );
}

export default App;
