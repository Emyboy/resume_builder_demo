import React from "react";
export interface JumbotronType {
  _id: string;
  type: string;
  css: string;
  markup: string;
  index: number;
  container_style: React.CSSProperties;
  heading: string;
  sub_heading: string;
  heading_style: React.CSSProperties;
  sub_heading_style: React.CSSProperties;
  has_avatar: boolean;
}