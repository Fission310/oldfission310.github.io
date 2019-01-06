import React from "react";
import PropTypes from "prop-types";

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {this.props.headComponents}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#D0E0D8" />
          <meta name="apple-mobile-web-app-title" content="Lazywill" />
          <link rel="apple-touch-icon" href="/icons/fission.png" sizes="57x57" />
          <link rel="apple-touch-icon" href="/icons/fission.png" sizes="60x60" />
          <link rel="apple-touch-icon" href="/icons/fission.png" sizes="72x72" />
          <link rel="apple-touch-icon" href="/icons/fission.png" sizes="76x76" />
          <link rel="apple-touch-icon" href="/icons/fission.png" sizes="114x114" />
          <link rel="apple-touch-icon" href="/icons/fission.png" sizes="120x120" />
          <link rel="apple-touch-icon" href="/icons/fission.png" sizes="144x144" />
          <link rel="apple-touch-icon" href="/icons/fission.png" sizes="152x152" />
          <link rel="apple-touch-icon" href="/icons/fission.png" sizes="180x180" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/fission.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/fission.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/icons/fission.png" />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
};
