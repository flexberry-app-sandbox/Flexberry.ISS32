﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.ISS32
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// List inv.
    /// </summary>
    // *** Start programmer edit section *** (ListInv CustomAttributes)

    // *** End programmer edit section *** (ListInv CustomAttributes)
    [AutoAltered()]
    [Caption("List inv")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ListInvE", new string[] {
            "Name as \'Name\'"})]
    public class ListInv : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.ISS32.Investment fInvestment;
        
        private IIS.ISS32.Support fSupport;
        
        // *** Start programmer edit section *** (ListInv CustomMembers)

        // *** End programmer edit section *** (ListInv CustomMembers)

        
        /// <summary>
        /// List inv.
        /// </summary>
        // *** Start programmer edit section *** (ListInv.Investment CustomAttributes)

        // *** End programmer edit section *** (ListInv.Investment CustomAttributes)
        [NotNull()]
        public virtual IIS.ISS32.Investment Investment
        {
            get
            {
                // *** Start programmer edit section *** (ListInv.Investment Get start)

                // *** End programmer edit section *** (ListInv.Investment Get start)
                IIS.ISS32.Investment result = this.fInvestment;
                // *** Start programmer edit section *** (ListInv.Investment Get end)

                // *** End programmer edit section *** (ListInv.Investment Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ListInv.Investment Set start)

                // *** End programmer edit section *** (ListInv.Investment Set start)
                this.fInvestment = value;
                // *** Start programmer edit section *** (ListInv.Investment Set end)

                // *** End programmer edit section *** (ListInv.Investment Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.ISS32.Support.
        /// </summary>
        // *** Start programmer edit section *** (ListInv.Support CustomAttributes)

        // *** End programmer edit section *** (ListInv.Support CustomAttributes)
        [Agregator()]
        [NotNull()]
        public virtual IIS.ISS32.Support Support
        {
            get
            {
                // *** Start programmer edit section *** (ListInv.Support Get start)

                // *** End programmer edit section *** (ListInv.Support Get start)
                IIS.ISS32.Support result = this.fSupport;
                // *** Start programmer edit section *** (ListInv.Support Get end)

                // *** End programmer edit section *** (ListInv.Support Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ListInv.Support Set start)

                // *** End programmer edit section *** (ListInv.Support Set start)
                this.fSupport = value;
                // *** Start programmer edit section *** (ListInv.Support Set end)

                // *** End programmer edit section *** (ListInv.Support Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ListInvE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ListInvE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ListInvE", typeof(IIS.ISS32.ListInv));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ListInv.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfListInv CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfListInv CustomAttributes)
    public class DetailArrayOfListInv : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.ISS32.DetailArrayOfListInv members)

        // *** End programmer edit section *** (IIS.ISS32.DetailArrayOfListInv members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ListInv by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ListInv.
        /// </summary>
        public DetailArrayOfListInv(IIS.ISS32.Support fSupport) : 
                base(typeof(ListInv), ((ICSSoft.STORMNET.DataObject)(fSupport)))
        {
        }
        
        public IIS.ISS32.ListInv this[int index]
        {
            get
            {
                return ((IIS.ISS32.ListInv)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.ISS32.ListInv dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
