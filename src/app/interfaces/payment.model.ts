export interface RequestPayload {
    clientReferenceInformation: {
      code: string;
    };
    paymentInformationS: {
      card: {
        number: string;
        expirationMonth: string;
        expirationYear: string;
        type: string;
      };
    };
    orderInformation: {
      amountDetails: {
        totalAmount: string;
        currency: string;
      };
      billTo: {
        firstName: string;
        lastName: string;
        address1: string;
        address2: string;
        locality: string;
        administrativeArea: string;
        postalCode: string;
        country: string;
        email: string;
        phoneNumber: string;
      };
      shipTo: {
        firstName: string;
        lastName: string;
        address1: string;
        address2: string;
        locality: string;
        administrativeArea: string;
        postalCode: string;
        country: string;
        phoneNumber: string;
      };
      lineItems: Array<{
        productCode: string;
        productName: string;
        productSku: string;
        quantity: string;
        unitPrice: string;
        taxAmount: string;
      }>;
    };
    buyerInformation: {
      merchantCustomerId: string;
      personalIdentification: {
        id: string;
      };
    };
    deviceInformation: {
      ipAddress: string;
      fingerprintSessionId: string;
    };
    merchantDefinedInformation: {
      ChannelSale: string;
      MIDCommerce: number;
      CommerceName: string;
      sixDigits: number;
      ProductCategory: string;
      productsDetail: string;
      GuestOrRegistered: string;
      DaysSinceSignedUp: number;
      SuccessOrders: string;
      ClientPhone: number;
      deliveryOrPickup: string;
      DaysForDispatch: string;
      SavedCard: string;
      Offer: string;
    };
    acquirerInformation: {
      merchantId: string;
    };
  }
  