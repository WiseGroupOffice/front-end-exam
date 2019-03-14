$(() => {
  const app = $("#app");

  const data = {
    company: {
      id: 2,
      email: "info@wisegroup.co.il",
      phone: "972584868588",
      industry_type: {
        id: 2,
        name: "Advertising/Public Relations"
      },
      legal_structure: {
        id: 3,
        name: "Sole proprietorship (Sole traders)"
      },
      reg_number: "123123",
      legal_name: "John Inc.",
      country: null,
      address: {
        address: "Rokmim 26",
        country: null,
        city: "Holon",
        postal_code: "5810000"
      },
      websites: [
        {
          id: 1,
          url: null,
          category: null,
          estimated_monthly_sales: null,
          estimated_transactions: null,
          average_transactions_amounts: null
        }
      ],
      associated_account: {
        id: 3,
        type: "business",
        associated_company: {
          id: 2,
          creator: {
            id: 3,
            first_name: "John",
            last_name: "Appleseed",
            email: "info@wisegroup.co.il",
            phone: "123123123",
            gender: "male",
            birthday: "2000-06-30",
            country: {
              iso: "IL",
              name: "Israel",
              area_code: "972"
            }
          },
          email: "info@wisegroup.co.il",
          phone: "123123123",
          industry_type: {
            id: 2,
            name: "Advertising/Public Relations"
          },
          legal_structure: {
            id: 3,
            name: "Sole proprietorship (Sole traders)"
          },
          reg_number: "123123",
          legal_name: "John Inc.",
          country: null,
          address: {
            address: "Rokmim 26",
            country: null,
            city: "Holon",
            postal_code: "5810000"
          },
          websites: [
            {
              id: 1,
              url: null,
              category: null
            }
          ]
        },
        creator: {
          id: 3,
          first_name: "Joghn",
          last_name: "Appleseed",
          email: "info@wisegroup.co.il",
          phone: "123123123",
          gender: "male",
          birthday: "2000-06-30",
          country: {
            iso: "IL",
            name: "Israel",
            area_code: "972",
            wallet_active: true
          }
        },
        members: [
          {
            id: 3,
            first_name: "John",
            last_name: "Appleseed",
            email: "info@wisegroup.co.il",
            phone: "123123123",
            gender: "male",
            birthday: "2000-06-30",
            country: {
              iso: "IL",
              name: "Israel",
              area_code: "972",
              wallet_active: true
            }
          }
        ]
      }
    }
  };

  app.html("Hello world" + "<br/>" + JSON.stringify(data));

  // todo your java script here
});
