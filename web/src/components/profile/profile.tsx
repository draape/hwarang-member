import React, { FC } from "react";
import { Link } from "../link/link";

type ProfileProps = {
  name: string;
  dateOfBirth: string;
  club: string;
  belt: string;
};

export const Profile: FC<ProfileProps> = ({
  name,
  dateOfBirth,
  club,
  belt,
}) => (
  <article className="profile">
    <header className="profile__heading">
      <div className="profile__image"></div>
      <div className="profile__name">
        <h2>{name}</h2>
        <span>{dateOfBirth}</span>
      </div>
    </header>

    <div className="profile__details">
      <span>
        <strong>Klubb:</strong> {club}
      </span>
      <span>
        <strong>Belte:</strong> {belt}
      </span>
    </div>
    <footer className="profile__actions">
      <Link href="#" text="Rediger profil" />
      <Link href="#" text="Endre passord" />
    </footer>
  </article>
);
