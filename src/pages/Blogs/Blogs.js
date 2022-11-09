import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
    return (
        <div className='w-11/12 mx-auto my-20' >
            <Helmet>
                <title>Blogs-Storyteller</title>
            </Helmet>
            <h1 className='header text-5xl text-center my-10'>Blogs</h1>
            <div className="overflow-x-auto">
                <h2 className='text-2xl font-bold'>Difference between SQL and NoSQL.</h2>
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>SQL</th>
                            <th>NoSQL</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>relational</td>
                            <td>non-relational</td>

                        </tr>

                        <tr>
                            <th>2</th>
                            <td>use structured query language and have a predefined schema</td>
                            <td> NoSQL databases have dynamic schemas for unstructured data.</td>

                        </tr>

                        <tr>
                            <th>3</th>
                            <td>are vertically scalable ,are table based	</td>
                            <td>are horizontally scalable. are document, key-value, graph or wide-column stores.</td>

                        </tr>
                        <tr>
                            <th>4</th>
                            <td>are better for multi-row transactions</td>
                            <td> are better for unstructured data like documents or JSON.</td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />
            <div className='my-12'>
                <h2 className='text-2xl font-bold'>What is JWT, and how does it work?</h2>

                <p>
                    JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                    <br />
                    User sign-in using username and password or google/facebook. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt public key.
                </p>
            </div>
            <hr />
            <div className='my-12'>
                <h2 className='text-2xl font-bold'>What is the difference between javascript and NodeJS?</h2>
                <p>Javascript is a programming language that is used for writing scripts on the website. NodeJS is a Javascript runtime environment.</p>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>JavaScript</th>
                                <th>NodeJs</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th>1</th>
                                <td>Javascript can only be run in the browsers.</td>
                                <td>We can run Javascript outside the browser with the help of NodeJS.</td>

                            </tr>

                            <tr>
                                <th>2</th>
                                <td>It is basically used on the client-side.</td>
                                <td>It is mostly used on the server-side.</td>

                            </tr>

                            <tr>
                                <th>3</th>
                                <td>Javascript is capable enough to add HTML and play with the DOM</td>
                                <td>Nodejs does not have capability to add HTML tags</td>

                            </tr>
                            <tr>
                                <th>4</th>
                                <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox</td>
                                <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript.</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <hr />
            <div className='my-12'>
                <h2 className='text-2xl font-bold'>How does NodeJS handle multiple requests at the same time?</h2>
                <p>
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                </p>
            </div>
        </div>
    );
};

export default Blogs;