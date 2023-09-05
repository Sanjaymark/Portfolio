import React from "react";

export const Skills = () =>
{
    return(
        <div className="mt-20">
            <div className="text-6xl heading p-2 my-16">Skills</div>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-96 rounded-box ">
                    <div className="side-heading text-4xl">Front-End Development</div>
                    <div className="flex w-full">
                        <div className="grid h-20 flex-grow place-items-center ">
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://codybonney.com/images/16x9/tags/html.png" />
                                </div>   
                            </div>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-20 flex-grow  ">
                            
                                <div className="avatar">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://www.codespot.org/assets/css.jpg" />
                                    </div>
                                </div>
                           
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="grid h-20 flex-grow place-items-center ">
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://wallpapercave.com/wp/wp2465994.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-20 flex-grow  ">
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://th.bing.com/th/id/OIP.xIqs1WOeHHf_xHZCVCj4YgHaFy?pid=ImgDet&rs=1" />
                                </div>
                            </div>
                        </div>
                    </div>    
                </div> 
                <div className="divider lg:divider-horizontal"></div> 
                <div className="grid flex-grow h-96  rounded-box ">
                    <div className="side-heading text-4xl">Back-End Development</div>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="grid h-32  place-items-center">
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://th.bing.com/th/id/OIP.aXM-E8NR8K2Icz-ro-EoygHaEK?pid=ImgDet&rs=1" />
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="grid h-32  place-items-center">
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://th.bing.com/th/id/R.60a8a3f54ee01077fb5b6091eda0866d?rik=Iu9Wxzm9%2fxf6cw&riu=http%3a%2f%2fcodecondo.com%2fwp-content%2fuploads%2f2016%2f02%2fExpress-js-15-785-391.jpg&ehk=aFLWVvLF1pkSbV0n%2fSXoq92MKJQDXwGbotoPtEMgjrM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal"></div> 
                <div className="grid flex-grow h-32  ">
                    <div className="flex flex-col w-full">
                        <div className="grid h-40   ">
                            <div className="side-heading text-4xl">Database</div>
                            <div className="grid h-32  place-items-center">
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://th.bing.com/th/id/OIP.eTG_I4LEgyGwP3RLc65GjAHaEG?pid=ImgDet&rs=1" />
                                </div>
                            </div>
                        </div>
                        </div> 
                        <div className="divider"></div> 
                        <div className="grid h-40  ">
                            <div className="side-heading text-4xl">Additional Skills</div>
                            <div className="flex w-full">
                                <div className="grid h-20 flex-grow  place-items-center">
                                    <div className="avatar">
                                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src="https://cloud-elements.com/wp-content/uploads/2019/01/github-logo-6004.jpg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="divider divider-horizontal"></div>
                                <div className="grid h-20 flex-grow  place-items-center">
                                    <div className="avatar">
                                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src="https://th.bing.com/th/id/OIP.LJw8aitT6YkTxXt56C5ahAHaEw?pid=ImgDet&rs=1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
    )
}