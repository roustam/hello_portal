import {StyledLink, PoliciesSectionWrapper} from "../../UserForm/FormComponent.style";
import React from "react";

const PoliciesSection = () => {
  const linkArr: { id: number; title: string }[] = [
    { id: 1, title: "Privacy policy" },
    { id: 2, title: "Support" },
    { id: 3, title: "Terms of use" },
  ];

  return (
          <PoliciesSectionWrapper>
            {linkArr.map((item) => (
                    <StyledLink key={item.id}>{item.title}</StyledLink>
            ))}
          </PoliciesSectionWrapper>
  )
}

export default PoliciesSection