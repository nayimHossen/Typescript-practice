//Pick

interface Person {
  name: string;
  email: string;
  contactInfo: string;
}

type Contact = Pick<Person, "contactInfo" | "email">;
